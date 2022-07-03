console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/DefaultReplicationPolicy.java.html" 
 , "texte" : "File connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/DefaultReplicationPolicy.java 23 rule violations " 
 , "fic2"  : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/DefaultReplicationPolicy.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "ReplicationPolicy"
 , "c2" : "org.apache.kafka.connect.mirror.DefaultReplicationPolicy"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.mirror.DefaultReplicationPolicy" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "void"
 , "c2" : "configure(Map<String,?>)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "formatRemoteTopic(String;String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "topicSource(String)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "upstreamTopic(String)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "internalSuffix()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "checkpointsTopicSuffix()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "offsetSyncsTopic(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "checkpointsTopic(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isCheckpointsTopic(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isMM2InternalTopic(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/DefaultReplicationPolicy.java.png" 

 , "ligneplantuml" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/DefaultReplicationPolicy.java.svg" }

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
 , "c4" : "4"
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
 , "c4" : "9"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "8"
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
   "c1" : "00013"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/DefaultReplicationPolicy.java.html#13"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00013] The class DefaultReplicationPolicy contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/DefaultReplicationPolicy.java.html#25"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00025] For method configure arguments Map&lt;String ,? &gt;  props"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/DefaultReplicationPolicy.java.html#25"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00025] The argument props is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/DefaultReplicationPolicy.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00028] In method org.apache.kafka.connect.mirror.DefaultReplicationPolicy.configure@POLYN171362 the MagicNumber/String  'Using custom remote topic separator: '{}'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/DefaultReplicationPolicy.java.html#34"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00034] For method formatRemoteTopic arguments String  sourceClusterAlias|String  topic"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/DefaultReplicationPolicy.java.html#39"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00039] For method topicSource arguments String  topic"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/DefaultReplicationPolicy.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.connect.mirror.DefaultReplicationPolicy.topicSource@POLYN172099 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/DefaultReplicationPolicy.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.connect.mirror.DefaultReplicationPolicy.topicSource@POLYN172099 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/DefaultReplicationPolicy.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.connect.mirror.DefaultReplicationPolicy.topicSource@POLYN172099 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/DefaultReplicationPolicy.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method upstreamTopic arguments String  topic"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/DefaultReplicationPolicy.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00050] For method upstreamTopic list of called methods Object monObjet|String topicSourceN172587"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/DefaultReplicationPolicy.java.html#50"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00050] The argument topic is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/DefaultReplicationPolicy.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.connect.mirror.DefaultReplicationPolicy.upstreamTopic@POLYN172490 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/DefaultReplicationPolicy.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.connect.mirror.DefaultReplicationPolicy.upstreamTopic@POLYN172490 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/DefaultReplicationPolicy.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.connect.mirror.DefaultReplicationPolicy.internalSuffix@POLYN172915 the MagicNumber/String  'internal' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/DefaultReplicationPolicy.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.connect.mirror.DefaultReplicationPolicy.checkpointsTopicSuffix@POLYN173025 the MagicNumber/String  'checkpoints' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/DefaultReplicationPolicy.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00068] For method offsetSyncsTopic arguments String  clusterAlias"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/DefaultReplicationPolicy.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.connect.mirror.DefaultReplicationPolicy.offsetSyncsTopic@POLYN173183 the MagicNumber/String  'mm2-offset-syncs' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/DefaultReplicationPolicy.java.html#73"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00073] For method checkpointsTopic arguments String  clusterAlias"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/DefaultReplicationPolicy.java.html#78"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00078] For method isCheckpointsTopic arguments String  topic"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/DefaultReplicationPolicy.java.html#78"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00078] The argument topic is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/DefaultReplicationPolicy.java.html#83"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00083] For method isMM2InternalTopic arguments String  topic"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/DefaultReplicationPolicy.java.html#83"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00083] The argument topic is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
};
console.log('leListeStr 99 main end');
