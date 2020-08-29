pragma solidity >0.4.0 <0.7.4;
pragma experimental ABIEncoderV2;
import './Ownable.sol';
import './OwnerFactory.sol';
import './ERC721.sol';

contract PointsFactory is Ownable{

event NewPoint();

 enum types{
    free, innovation, creativity, helpful, trustworthy, resourceful
}

struct Point{
uint id;
types Mytype ;
bool tradable;
}
uint pid=0;

Point[] public points;
mapping (uint => address) public pointToOwner;
mapping (address => uint) ownerPointCount;
mapping (string => PointsFactory.types) public typetostring;

function createPoint() internal returns(Point memory){
    types temp = types.free;
    Point memory p1=Point(pid++,temp, true);
    points.push(p1);
    uint id = points.length - 1;
    pointToOwner[id] = msg.sender;
    ownerPointCount[msg.sender]++;
    typetostring["f"]=types.free;
    typetostring["i"]=types.innovation;
    typetostring["c"]=types.creativity;
    typetostring["t"]=types.trustworthy;
    typetostring["h"]=types.helpful;
    typetostring["r"]=types.resourceful;
   // emit NewPoint();
    return p1;
}

modifier onlyownerof(uint id){
    require(msg.sender == pointToOwner[id]);
    _;
}
function getmytype(Point memory p) public returns (types){
    return p.Mytype;
}

}