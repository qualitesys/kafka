console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java 13 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.query.PositionBound"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.query.PositionBound" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "PositionBound"
 , "c2" : "PositionBound(Position)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "PositionBound"
 , "c2" : "unbounded()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "PositionBound"
 , "c2" : "at(Position)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isUnbounded()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Position"
 , "c2" : "position()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00011"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.html#11"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00011] The class PositionBound contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00015"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.html#15"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00015] The argument position is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.html#25"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00025] For method at arguments Position  position"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.streams.query.PositionBound.toString@POLYN170246 the MagicNumber/String  'PositionBound{position=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.streams.query.PositionBound.toString@POLYN170246 the MagicNumber/String  '}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00045] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00049] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.streams.query.PositionBound.equals@POLYN170394 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.streams.query.PositionBound.equals@POLYN170394 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.streams.query.PositionBound.equals@POLYN170394 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.streams.query.PositionBound.hashCode@POLYN170961 the MagicNumber/String  'This mutable object is not suitable as a hash key' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00020"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.html#20"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00020] Public method unbounded is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.html#57"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00057] Public method hashCode is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
