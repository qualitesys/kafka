console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/server/policy/AlterConfigPolicy.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/server/policy/AlterConfigPolicy.java 7 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "Configurable,AutoCloseable"
 , "c2" : "org.apache.kafka.server.policy.AlterConfigPolicy"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.server.policy.AlterConfigPolicy" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00098"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/server/policy/AlterConfigPolicy.java.html#98"
 , "c1" : "void"
 , "c2" : "validate(RequestMetadata)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/server/policy/AlterConfigPolicy.java.svg" }

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
 , "c4" : "5"
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
 , "c1" : "00073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/server/policy/AlterConfigPolicy.java.html#73"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00073] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/server/policy/AlterConfigPolicy.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.server.policy.AlterConfigPolicy.RequestMetadata.equals@POLYN158701 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/server/policy/AlterConfigPolicy.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.server.policy.AlterConfigPolicy.RequestMetadata.equals@POLYN158701 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/server/policy/AlterConfigPolicy.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.server.policy.AlterConfigPolicy.RequestMetadata.toString@POLYN159254 the MagicNumber/String  'AlterConfigPolicy.RequestMetadata(resource=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/server/policy/AlterConfigPolicy.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.server.policy.AlterConfigPolicy.RequestMetadata.toString@POLYN159254 the MagicNumber/String  ', configs=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/server/policy/AlterConfigPolicy.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.server.policy.AlterConfigPolicy.RequestMetadata.toString@POLYN159254 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/server/policy/AlterConfigPolicy.java.html#36"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDI[00036] The interface AlterConfigPolicy does not respect the SOLID Interface Segregation principle. Must contain only one method declaration"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/server/policy/AlterConfigPolicy.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
