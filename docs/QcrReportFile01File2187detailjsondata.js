console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Platform.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/common/Platform.java 6 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.trogdor.common.Platform"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.common.Platform" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00060"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Platform.java.html#60"
 , "c1" : "String"
 , "c2" : "name()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00065"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Platform.java.html#65"
 , "c1" : "Node"
 , "c2" : "curNode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00070"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Platform.java.html#70"
 , "c1" : "Topology"
 , "c2" : "topology()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Platform.java.html#75"
 , "c1" : "Scheduler"
 , "c2" : "scheduler()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00087"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Platform.java.html#87"
 , "c1" : "String"
 , "c2" : "runCommand(String[])"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Platform.java.svg" }

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
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "4"
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
 , "c1" : "00042"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Platform.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00042] For method parse arguments String  curNodeName|String  path"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Platform.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.trogdor.common.Platform.Config.parse@POLYN160529 the MagicNumber/String  'platform' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Platform.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.trogdor.common.Platform.Config.parse@POLYN160529 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Platform.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.trogdor.common.Platform.Config.parse@POLYN160529 the MagicNumber/String  'Expected to find a 'platform' field ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Platform.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.trogdor.common.Platform.Config.parse@POLYN160529 the MagicNumber/String  'in the root JSON configuration object' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Platform.java.html#31"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDI[00031] The interface Platform does not respect the SOLID Interface Segregation principle. Must contain only one method declaration"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/Platform.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
