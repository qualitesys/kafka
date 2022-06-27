console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorCheckpointConnector.java.html" 
 , "texte" : "File connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorCheckpointConnector.java 25 rule violations " 
 , "fic2"  : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorCheckpointConnector.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "SourceConnector"
 , "c2" : "org.apache.kafka.connect.mirror.MirrorCheckpointConnector"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.mirror.MirrorCheckpointConnector" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "MirrorCheckpointConnector"
 , "c2" : "MirrorCheckpointConnector()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "MirrorCheckpointConnector"
 , "c2" : "MirrorCheckpointConnector(List<String>;MirrorConnectorConfig)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "start(Map<String,String>)"
 , "c3" : "2"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "stop()"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "Class<?extendsTask>"
 , "c2" : "taskClass()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<Map<String,String>>"
 , "c2" : "taskConfigs(int)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "ConfigDef"
 , "c2" : "config()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "version()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "refreshConsumerGroups()"
 , "c3" : "2"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "loadInitialConsumerGroups()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<String>"
 , "c2" : "findConsumerGroups()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Collection<ConsumerGroupListing>"
 , "c2" : "listConsumerGroups()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "createInternalTopics()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "shouldReplicate(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorCheckpointConnector.java.png" 

 , "ligneplantuml" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorCheckpointConnector.java.svg" }

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
 , "c4" : "7"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "10"
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
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorCheckpointConnector.java.html#47"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00047] For method start arguments Map&lt;String ,String &gt;  props"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorCheckpointConnector.java.html#47"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00047] For method start list of called methods Object monObjet|org.apache.kafka.clients.admin.AdminClient AdminClient_createN183059"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorCheckpointConnector.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.connect.mirror.MirrorCheckpointConnector.start@POLYN182440 the MagicNumber/String  'creating internal topics' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorCheckpointConnector.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.connect.mirror.MirrorCheckpointConnector.start@POLYN182440 the MagicNumber/String  'loading initial consumer groups' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorCheckpointConnector.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.connect.mirror.MirrorCheckpointConnector.start@POLYN182440 the MagicNumber/String  'refreshing consumer groups' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorCheckpointConnector.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.connect.mirror.MirrorCheckpointConnector.start@POLYN182440 the MagicNumber/String  'Started {} with {} consumer groups.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorCheckpointConnector.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.connect.mirror.MirrorCheckpointConnector.start@POLYN182440 the MagicNumber/String  'Started {} with consumer groups: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorCheckpointConnector.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.connect.mirror.MirrorCheckpointConnector.stop@POLYN183906 the MagicNumber/String  'scheduler' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorCheckpointConnector.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.connect.mirror.MirrorCheckpointConnector.stop@POLYN183906 the MagicNumber/String  'group filter' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorCheckpointConnector.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.connect.mirror.MirrorCheckpointConnector.stop@POLYN183906 the MagicNumber/String  'source admin client' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorCheckpointConnector.java.html#82"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00082] For method taskConfigs arguments int  maxTasks"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorCheckpointConnector.java.html#106"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00106] For method refreshConsumerGroups list of called methods Object monObjet|java.util.List&lt;String&gt; findConsumerGroupsN185551"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorCheckpointConnector.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.connect.mirror.MirrorCheckpointConnector.refreshConsumerGroups@POLYN185437 the MagicNumber/String  'Found {} consumer groups for {}. {} are new. {} were removed. Previously had {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorCheckpointConnector.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.connect.mirror.MirrorCheckpointConnector.refreshConsumerGroups@POLYN185437 the MagicNumber/String  'Found new consumer groups: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorCheckpointConnector.java.html#125"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00125] For method loadInitialConsumerGroups list of called methods Object monObjet|java.util.List&lt;String&gt; findConsumerGroupsN186770"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorCheckpointConnector.java.html#148"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00148] For method shouldReplicate arguments String  group"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorCheckpointConnector.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.mirror.MirrorCheckpointConnector.refreshConsumerGroups@POLYN185437"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorCheckpointConnector.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.mirror.MirrorCheckpointConnector.start@POLYN182440"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorCheckpointConnector.java.html#116"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00116] In the recursive method org.apache.kafka.connect.mirror.MirrorCheckpointConnector.refreshConsumerGroups@POLYN185437 the MagicNumber/String 'Found {} consumer groups for {}. {} are new. {} were removed. Previously had {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorCheckpointConnector.java.html#119"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00119] In the recursive method org.apache.kafka.connect.mirror.MirrorCheckpointConnector.refreshConsumerGroups@POLYN185437 the MagicNumber/String 'Found new consumer groups: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorCheckpointConnector.java.html#57"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00057] In the recursive method org.apache.kafka.connect.mirror.MirrorCheckpointConnector.start@POLYN182440 the MagicNumber/String 'creating internal topics' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorCheckpointConnector.java.html#58"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00058] In the recursive method org.apache.kafka.connect.mirror.MirrorCheckpointConnector.start@POLYN182440 the MagicNumber/String 'loading initial consumer groups' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorCheckpointConnector.java.html#60"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00060] In the recursive method org.apache.kafka.connect.mirror.MirrorCheckpointConnector.start@POLYN182440 the MagicNumber/String 'refreshing consumer groups' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorCheckpointConnector.java.html#61"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00061] In the recursive method org.apache.kafka.connect.mirror.MirrorCheckpointConnector.start@POLYN182440 the MagicNumber/String 'Started {} with {} consumer groups.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorCheckpointConnector.java.html#62"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00062] In the recursive method org.apache.kafka.connect.mirror.MirrorCheckpointConnector.start@POLYN182440 the MagicNumber/String 'Started {} with consumer groups: {}' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
