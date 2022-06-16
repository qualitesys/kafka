console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/ApiVersions.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/ApiVersions.java 10 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/ApiVersions.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
]
, 
"data02" : [
]
, 
"data03" : [
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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00013"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ApiVersions.java.html#13"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00013] The class ApiVersions contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00018"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ApiVersions.java.html#18"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00018] Lock statement on synchronized method update"
}} 
,
{ "ligne" : {
   "c1" : "00018"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ApiVersions.java.html#18"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00018] For method update arguments String  nodeId|NodeApiVersions  nodeApiVersions"
}} 
,
{ "ligne" : {
   "c1" : "00018"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ApiVersions.java.html#18"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00018] The argument nodeApiVersions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ApiVersions.java.html#23"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00023] Lock statement on synchronized method remove"
}} 
,
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ApiVersions.java.html#23"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00023] For method remove arguments String  nodeId"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ApiVersions.java.html#28"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00028] Lock statement on synchronized method get"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ApiVersions.java.html#28"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00028] For method get arguments String  nodeId"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ApiVersions.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.clients.ApiVersions.computeMaxUsableProduceMagic@POLYN161307 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ApiVersions.java.html#43"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00043] Lock statement on synchronized method maxUsableProduceMagic"
}} 
]
};
console.log('leListeStr 99 main end');
