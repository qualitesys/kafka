console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/auth/SslEngineFactory.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/auth/SslEngineFactory.java 1 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "Configurable,Closeable"
 , "c2" : "org.apache.kafka.common.security.auth.SslEngineFactory"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.security.auth.SslEngineFactory" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00044"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/auth/SslEngineFactory.java.html#44"
 , "c1" : "SSLEngine"
 , "c2" : "createClientSslEngine(String;int;String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00053"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/auth/SslEngineFactory.java.html#53"
 , "c1" : "SSLEngine"
 , "c2" : "createServerSslEngine(String;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00070"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/auth/SslEngineFactory.java.html#70"
 , "c1" : "boolean"
 , "c2" : "shouldBeRebuilt(Map&lt;String,Object&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00076"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/auth/SslEngineFactory.java.html#76"
 , "c1" : "Set&lt;String&gt;"
 , "c2" : "reconfigurableConfigs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00082"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/auth/SslEngineFactory.java.html#82"
 , "c1" : "KeyStore"
 , "c2" : "keystore()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00088"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/auth/SslEngineFactory.java.html#88"
 , "c1" : "KeyStore"
 , "c2" : "truststore()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/auth/SslEngineFactory.java.svg" }

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
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/auth/SslEngineFactory.java.html#34"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDI[00034] The interface SslEngineFactory does not respect the SOLID Interface Segregation principle. Must contain only one method declaration"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/security/auth/SslEngineFactory.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
