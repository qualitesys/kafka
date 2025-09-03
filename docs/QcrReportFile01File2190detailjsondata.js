console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Topology.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/common/Topology.java 4 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.trogdor.common.Topology"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.common.Topology" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Topology.java.html#47"
 , "c1" : "Node"
 , "c2" : "node(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Topology.java.html#52"
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

 "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Topology.java.svg" }

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
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAVSOLIDI"
 , "c3" : "The class does not respect the SOLID principle Interface Segregation"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "1"
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
 , "c1" : "00033"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Topology.java.html#33"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00033] For method agentNodeNames arguments Topology  topology"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Topology.java.html#33"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00033] The argument topology is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Topology.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.trogdor.common.Topology.Util.agentNodeNames@POLYN156655 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Topology.java.html#28"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDI[00028] The interface Topology does not respect the SOLID Interface Segregation principle. Must contain only one method declaration"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Topology.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
