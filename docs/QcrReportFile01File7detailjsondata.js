console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/CommonClientConfigs.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/CommonClientConfigs.java 14 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/CommonClientConfigs.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.CommonClientConfigs"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.CommonClientConfigs" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "Map<String,Object>"
 , "c2" : "postProcessReconnectBackoffConfigs(AbstractConfig;Map<String,Object>)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "postValidateSaslMechanismConfig(AbstractConfig)"
 , "c3" : "3"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/CommonClientConfigs.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/CommonClientConfigs.java.svg" }

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
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
,
"data13a" : [
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
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
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00016"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/CommonClientConfigs.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00016] The class CommonClientConfigs contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/CommonClientConfigs.java.html#169"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00169] For method postProcessReconnectBackoffConfigs arguments AbstractConfig  config|Map&lt;String ,Object &gt;  parsedValues"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/CommonClientConfigs.java.html#169"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00169] For method postProcessReconnectBackoffConfigs list of called methods Object monObjet|java.util.Map&lt;String,Object&gt; config_originalsN190663"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/CommonClientConfigs.java.html#169"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00169] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/CommonClientConfigs.java.html#170"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00170] The argument parsedValues is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00175"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/CommonClientConfigs.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method org.apache.kafka.clients.CommonClientConfigs.postProcessReconnectBackoffConfigs@POLYN190346 the MagicNumber/String  'Disabling exponential reconnect backoff because {} is set, but {} is not.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/CommonClientConfigs.java.html#182"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00182] For method postValidateSaslMechanismConfig arguments AbstractConfig  config"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/CommonClientConfigs.java.html#182"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00182] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/CommonClientConfigs.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.clients.CommonClientConfigs.postValidateSaslMechanismConfig@POLYN191178 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/CommonClientConfigs.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.clients.CommonClientConfigs.postValidateSaslMechanismConfig@POLYN191178 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/CommonClientConfigs.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.clients.CommonClientConfigs.postValidateSaslMechanismConfig@POLYN191178 the MagicNumber/String  'When the ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/CommonClientConfigs.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.clients.CommonClientConfigs.postValidateSaslMechanismConfig@POLYN191178 the MagicNumber/String  ' configuration enables SASL, mechanism must be non-null and non-empty string.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/CommonClientConfigs.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.CommonClientConfigs.postProcessReconnectBackoffConfigs@POLYN190346"
}} 
,
{ "ligne" : {
   "c1" : "00175"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/CommonClientConfigs.java.html#175"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00175] In the recursive method org.apache.kafka.clients.CommonClientConfigs.postProcessReconnectBackoffConfigs@POLYN190346 the MagicNumber/String 'Disabling exponential reconnect backoff because {} is set, but {} is not.' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
