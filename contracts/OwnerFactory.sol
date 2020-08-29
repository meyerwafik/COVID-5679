pragma solidity >0.4.0 <0.7.4;
pragma experimental ABIEncoderV2; 

import './Ownable.sol';
import './PointsFactory.sol';
import './ERC721.sol';
contract OwnerFactory is PointsFactory{

struct Owner{
    address oaddress;
    string name;
    Point[] pointsowner;
    Point[] freepoints;
    mapping(address => bool[6]) typessent;
    uint freepointscount;
}
event NewOwner();
mapping(address => Owner) public addresstoowner;
mapping(address => uint) addresstoid;
mapping(address => bool) public ownerpresent;
Owner[] public owners;

uint id=0;
constructor () public {

}
function createOwner(string storage name) internal{
    Owner memory o1;
    for(uint i=0 ; i<10 ;i++){
        o1.freepoints[i]=createPoint();
    }
    o1.name=name;
    o1.oaddress=owner();
    addresstoowner[o1.oaddress]=o1;
    addresstoid[o1.oaddress]=id++;
    addresstoowner[o1.oaddress].freepointscount=10;
    ownerpresent[msg.sender]=true;
    owners.push(o1);
}
function checkowner() public view returns (bool){
    return (ownerpresent[msg.sender]);
}
// function getowner(address a)public view returns(Owner){
//     return addresstoowner[a];
// }
function getpointcount(string memory _t, Point[] memory pointso) public returns (uint){
    uint ip=0;
    uint cp=0;
    uint hp=0;
    uint tp=0;
    uint rp=0;
    uint fp=0;
    for (uint i = 0; i < pointso.length; i++) {
        if(PointsFactory.getmytype(pointso[i]) ==  typetostring[_t]) {
           fp++;}
           else if(PointsFactory.getmytype(pointso[i]) ==  typetostring[_t]){
               ip++;
           }else if(PointsFactory.getmytype(pointso[i]) ==  typetostring[_t])
             cp++;
             else if(PointsFactory.getmytype(pointso[i]) ==  typetostring[_t])
             hp++;
             else if(PointsFactory.getmytype(pointso[i])==  typetostring[_t])
             tp++;
             else if(PointsFactory.getmytype(pointso[i])==  typetostring[_t])
             rp++;
            
}
if(keccak256(abi.encodePacked(_t)) == keccak256(abi.encodePacked('i')))
    return ip;
    else if(keccak256(abi.encodePacked(_t))== keccak256(abi.encodePacked('c')))
    return cp;
    else if(keccak256(abi.encodePacked(_t)) == keccak256(abi.encodePacked('h')))
    return hp;
    else if(keccak256(abi.encodePacked(_t)) == keccak256(abi.encodePacked('t')))
    return tp;
    else if (keccak256(abi.encodePacked(_t)) == keccak256(abi.encodePacked('r')))
    return rp;
    else return fp;
}
function getAdd() public returns(address){
    return msg.sender;
}
}

