pragma solidity 0.5.16;
pragma experimental ABIEncoderV2;

import './ERC721.sol';
import './PointsFactory.sol';

contract transfering is PointsFactory, ERC721, OwnerFactory{
  constructor() public {}
 function _transfer(address _from, address _to,uint _tokenId, types t) private {
    if(addresstoowner[_from].typessent[_to][uint(t)]==false){
      for(uint i=0;i<6;i++){
        addresstoowner[_from].typessent[_to][i]=false;
      }
    }
    require(!(addresstoowner[_from].typessent[_to][uint(t)]) && (addresstoowner[_from].freepointscount>=1));
    ownerPointCount[_to]++;
    ownerPointCount[msg.sender]--;
    pointToOwner[_tokenId] = _to;
    addresstoowner[_from].typessent[_to][uint(t)]=true;
    ownerPointCount[_to]++;
    addresstoowner[_from].freepointscount--;
    addresstoowner[_to].pointsowner.push(addresstoowner[_from].freepoints[addresstoowner[_from].freepoints.length-1]);
    addresstoowner[_from].freepoints.pop();
    addresstoowner[_to].pointsowner[points.length-1].Mytype=t;
    emit Transfer(_from, _to, _tokenId);
  }

  function approve(address _aproved, uint _tokenId)public payable{

  }


}