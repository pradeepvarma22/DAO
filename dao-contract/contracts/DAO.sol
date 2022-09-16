//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./IERC20.sol";

contract DAO is Ownable {

    enum Side {
        YES,
        NO
    }
    enum Status {
        UNDECIDED,
        APPROVED,
        REJECTED
    }

    struct Proposal {
        address author;
        bytes32 proposalnamehash;
        uint256 createdAt;
        uint256 votesYes;
        uint256 votesNo;
        Status status;
    }


    // proposalHashName to Proposal Struct data type
    mapping(bytes32 => Proposal) public proposals;

    bytes32[] public proposalhashlist;

    uint256 public noofproposals;
    
    // who voter for who investor-> proposalHashName-> boolean
    mapping(address =>  mapping(bytes32 => bool)) public votes;

    // address of investor to amount
    mapping(address => uint256 ) public shares;

    uint256 public totalShares;

    IERC20 public governanceToken;

    // those who have 10 tokens minimum can create new proposals
    uint256 constant CREATE_PROPOSAL_MIN_SHARE = 10 * (10**18);

    uint256 constant VOTING_PERIOD = 7 days;

    constructor(address _token)
    {
        governanceToken = IERC20(_token);
    }


    function deposit(uint256 amount) external
    {
        shares[msg.sender] += amount;
        totalShares += amount;
        governanceToken.transferFrom(msg.sender, address(this), amount);

    }

    function withdraw(uint256 amount) external
    {
        require(shares[msg.sender] >= amount, "not enough shares");

        shares[msg.sender] -= amount;
        
        totalShares -= amount;

        governanceToken.transfer(msg.sender, amount);
    }

    function createProposal(bytes32 proposalhash) external
    {
        require(shares[msg.sender] >= CREATE_PROPOSAL_MIN_SHARE , "not enough shares to create ");
        require(proposals[proposalhash].proposalnamehash == bytes32(0),"Proposal Already Exits");
        proposalhashlist.push(proposalhash);
        noofproposals +=1;
        proposals[proposalhash] = Proposal(msg.sender, proposalhash, block.timestamp, 0, 0, Status.UNDECIDED  );

    }


    function vote(bytes32 proposalnamehash,Side side ) external
    {
        require(votes[msg.sender][proposalnamehash] == false, "Already Voted");
        Proposal storage proposal = proposals[proposalnamehash];
        require(proposal.proposalnamehash != bytes32(0), "Proposal Does not exists");
        require(block.timestamp <= proposal.createdAt + VOTING_PERIOD , "Voting Period Over" );

        votes[msg.sender][proposalnamehash] = true;


        if(side == Side.YES)
        {
            proposal.votesYes +=   shares[msg.sender];          // the more governance token we have we can vote

            // check end of votes i.e total share has been done

            if(proposal.votesYes * 100 / totalShares  > 50)                 // votesYes/ totalShares > 0.5
            {
                proposal.status  = Status.APPROVED;
            }


        }
        else
        {
            proposal.votesNo +=   shares[msg.sender];          // the more governance token we have we can vote

            if(proposal.votesNo * 100 / totalShares  > 50)                 // votesYes/ totalShares > 0.5
            {
                proposal.status  = Status.REJECTED;
            }

        }

    }


}
