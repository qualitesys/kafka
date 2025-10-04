console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/CommonClientConfigs.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/CommonClientConfigs.java 10 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.CommonClientConfigs"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.CommonClientConfigs" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00196"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/CommonClientConfigs.java.html#196"
 , "c1" : "Map&lt;String,Object&gt;"
 , "c2" : "postProcessReconnectBackoffConfigs(AbstractConfig;Map&lt;String,Object&gt;)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00209"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/CommonClientConfigs.java.html#209"
 , "c1" : "void"
 , "c2" : "postValidateSaslMechanismConfig(AbstractConfig)"
 , "c3" : "3"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/CommonClientConfigs.java.svg" }

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
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00196"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/CommonClientConfigs.java.html#196"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00196] For method postProcessReconnectBackoffConfigs arguments AbstractConfig  config|Map&lt;String ,Object &gt;  parsedValues"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00196"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/CommonClientConfigs.java.html#196"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00196] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/CommonClientConfigs.java.html#197"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00197] The argument parsedValues is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00202"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/CommonClientConfigs.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.clients.CommonClientConfigs.postProcessReconnectBackoffConfigs@POLYN186156 the MagicNumber/String  'Disabling exponential reconnect backoff because {} is set, but {} is not.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00209"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/CommonClientConfigs.java.html#209"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00209] For method postValidateSaslMechanismConfig arguments AbstractConfig  config"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00209"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/CommonClientConfigs.java.html#209"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00209] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00213"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/CommonClientConfigs.java.html#213"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00213] In method org.apache.kafka.clients.CommonClientConfigs.postValidateSaslMechanismConfig@POLYN186992 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/CommonClientConfigs.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.clients.CommonClientConfigs.postValidateSaslMechanismConfig@POLYN186992 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/CommonClientConfigs.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.clients.CommonClientConfigs.postValidateSaslMechanismConfig@POLYN186992 the MagicNumber/String  'When the ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00215"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/CommonClientConfigs.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method org.apache.kafka.clients.CommonClientConfigs.postValidateSaslMechanismConfig@POLYN186992 the MagicNumber/String  ' configuration enables SASL, mechanism must be non-null and non-empty string.' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/CommonClientConfigs.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
