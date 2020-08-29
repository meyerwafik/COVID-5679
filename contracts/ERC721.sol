pragma solidity 0.5.16;

contract ERC721{
  event Transfer(address indexed _from, address indexed _to, uint256 indexed _tokenId);
  event Approval(address indexed _owner, address indexed _approved, uint256 indexed _tokenId);
  function approve(address _approved, uint256 _tokenId) external payable;
}
