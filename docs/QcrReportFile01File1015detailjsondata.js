console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/IdentityReplicationPolicy.java.html" 
 , "texte" : "File connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/IdentityReplicationPolicy.java 10 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "org.apache.kafka.connect.mirror.IdentityReplicationPolicy"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.mirror.IdentityReplicationPolicy" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00039"
 , "c5link" : "././qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/IdentityReplicationPolicy.java.html#39"
 , "c1" : "void"
 , "c2" : "configure(Map&lt;String,?&gt;)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00053"
 , "c5link" : "././qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/IdentityReplicationPolicy.java.html#53"
 , "c1" : "String"
 , "c2" : "formatRemoteTopic(String;String)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00068"
 , "c5link" : "././qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/IdentityReplicationPolicy.java.html#68"
 , "c1" : "String"
 , "c2" : "topicSource(String)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00081"
 , "c5link" : "././qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/IdentityReplicationPolicy.java.html#81"
 , "c1" : "String"
 , "c2" : "upstreamTopic(String)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00089"
 , "c5link" : "././qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/IdentityReplicationPolicy.java.html#89"
 , "c1" : "boolean"
 , "c2" : "looksLikeHeartbeat(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/IdentityReplicationPolicy.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
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
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
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
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/IdentityReplicationPolicy.java.html#39"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00039] For method configure arguments Map&lt;String ,? &gt;  props"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/IdentityReplicationPolicy.java.html#39"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00039] The argument props is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/IdentityReplicationPolicy.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.connect.mirror.IdentityReplicationPolicy.configure@POLYN161346 the MagicNumber/String  'Using source cluster alias  {} .' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/IdentityReplicationPolicy.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00053] For method formatRemoteTopic arguments String  sourceClusterAlias|String  topic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/IdentityReplicationPolicy.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00068] For method topicSource arguments String  topic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/IdentityReplicationPolicy.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00081] For method upstreamTopic arguments String  topic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/IdentityReplicationPolicy.java.html#89"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00089] For method looksLikeHeartbeat arguments String  topic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/IdentityReplicationPolicy.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.connect.mirror.IdentityReplicationPolicy.looksLikeHeartbeat@POLYN163155 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/IdentityReplicationPolicy.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.mirror.IdentityReplicationPolicy.configure@POLYN161346"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/IdentityReplicationPolicy.java.html#43"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00043] In the recursive method org.apache.kafka.connect.mirror.IdentityReplicationPolicy.configure@POLYN161346 the MagicNumber/String 'Using source cluster alias  {} .' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/IdentityReplicationPolicy.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
