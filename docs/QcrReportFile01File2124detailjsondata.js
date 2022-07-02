console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/basic/BasicTopology.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/basic/BasicTopology.java 8 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/basic/BasicTopology.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Topology"
 , "c2" : "org.apache.kafka.trogdor.basic.BasicTopology"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.basic.BasicTopology" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "BasicTopology"
 , "c2" : "BasicTopology(NavigableMap<String,Node>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "BasicTopology"
 , "c2" : "BasicTopology(JsonNode)"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "Node"
 , "c2" : "node(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "NavigableMap<String,Node>"
 , "c2" : "nodes()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/basic/BasicTopology.java.png" 

 , "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/basic/BasicTopology.java.svg" }

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
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "3"
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
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00013"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/basic/BasicTopology.java.html#13"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00013] The class BasicTopology contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00020"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/basic/BasicTopology.java.html#20"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00020] The argument configRoot is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/basic/BasicTopology.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00027] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/basic/BasicTopology.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00028] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00029"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/basic/BasicTopology.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00029] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/basic/BasicTopology.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00022] In method org.apache.kafka.trogdor.basic.BasicTopology.BasicTopology@POLYN165418 the MagicNumber/String  'Expected the 'nodes' element to be ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/basic/BasicTopology.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method org.apache.kafka.trogdor.basic.BasicTopology.BasicTopology@POLYN165418 the MagicNumber/String  'a JSON object.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/basic/BasicTopology.java.html#35"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00035] For method node arguments String  id"
}} 
]
};
console.log('leListeStr 99 main end');
