console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Node.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/common/Node.java 6 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Node.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.trogdor.common.Node"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.common.Node" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Node.java.html#51"
 , "c1" : "String"
 , "c2" : "name()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Node.java.html#56"
 , "c1" : "String"
 , "c2" : "hostname()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Node.java.html#62"
 , "c1" : "String"
 , "c2" : "getConfig(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00067"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Node.java.html#67"
 , "c1" : "Set<String>"
 , "c2" : "tags()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Node.java.png" 

 , "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Node.java.svg" }

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
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Node.java.html#30"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00030] For method getIntConfig arguments Node  node|String  key|int  defaultVal"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Node.java.html#30"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00030] For method getIntConfig list of called methods Object monObjet|java.lang.String node_getConfigN146269"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Node.java.html#30"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00030] The argument node is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Node.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method org.apache.kafka.trogdor.common.Node.Util.getIntConfig@POLYN146122 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Node.java.html#39"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00039] For method getTrogdorAgentPort arguments Node  node"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Node.java.html#43"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00043] For method getTrogdorCoordinatorPort arguments Node  node"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Node.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
