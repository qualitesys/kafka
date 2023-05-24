console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/basic/BasicTopology.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/basic/BasicTopology.java 7 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Topology"
 , "c2" : "org.apache.kafka.trogdor.basic.BasicTopology"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.basic.BasicTopology" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00031"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/basic/BasicTopology.java.html#31"
 , "c1" : "BasicTopology"
 , "c2" : "BasicTopology(NavigableMap&lt;String,Node&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00035"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/basic/BasicTopology.java.html#35"
 , "c1" : "BasicTopology"
 , "c2" : "BasicTopology(JsonNode)"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/basic/BasicTopology.java.html#50"
 , "c1" : "Node"
 , "c2" : "node(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/basic/BasicTopology.java.html#55"
 , "c1" : "NavigableMap&lt;String,Node&gt;"
 , "c2" : "nodes()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/basic/BasicTopology.java.svg" }

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
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/basic/BasicTopology.java.html#35"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00035] The argument configRoot is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/basic/BasicTopology.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00042] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/basic/BasicTopology.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00043] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/basic/BasicTopology.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00044] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/basic/BasicTopology.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.trogdor.basic.BasicTopology.BasicTopology@POLYN153476 the MagicNumber/String  'Expected the 'nodes' element to be ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/basic/BasicTopology.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method org.apache.kafka.trogdor.basic.BasicTopology.BasicTopology@POLYN153476 the MagicNumber/String  'a JSON object.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/basic/BasicTopology.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method node arguments String  id"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/basic/BasicTopology.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
