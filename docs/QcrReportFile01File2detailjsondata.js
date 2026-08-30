console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/ApiVersions.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/ApiVersions.java 9 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.ApiVersions"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.ApiVersions" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00038"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/ApiVersions.java.html#38"
 , "c1" : "void"
 , "c2" : "update(String;NodeApiVersions)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00043"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/ApiVersions.java.html#43"
 , "c1" : "void"
 , "c2" : "remove(String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/ApiVersions.java.html#48"
 , "c1" : "NodeApiVersions"
 , "c2" : "get(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/ApiVersions.java.html#52"
 , "c1" : "byte"
 , "c2" : "computeMaxUsableProduceMagic()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00063"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/ApiVersions.java.html#63"
 , "c1" : "byte"
 , "c2" : "maxUsableProduceMagic()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/ApiVersions.java.svg" }

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
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ApiVersions.java.html#38"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00038] Lock statement on synchronized method update"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ApiVersions.java.html#38"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00038] For method update arguments String  nodeId|NodeApiVersions  nodeApiVersions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ApiVersions.java.html#38"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00038] The argument nodeApiVersions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ApiVersions.java.html#43"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00043] Lock statement on synchronized method remove"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ApiVersions.java.html#43"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00043] For method remove arguments String  nodeId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ApiVersions.java.html#48"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00048] Lock statement on synchronized method get"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ApiVersions.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method get arguments String  nodeId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ApiVersions.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.clients.ApiVersions.computeMaxUsableProduceMagic@POLYN151491 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ApiVersions.java.html#63"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00063] Lock statement on synchronized method maxUsableProduceMagic"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/ApiVersions.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
