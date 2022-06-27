console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java 154 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AutoCloseable"
 , "c2" : "org.apache.kafka.connect.util.TopicAdmin"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.util.TopicAdmin" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "NewTopicBuilder"
 , "c2" : "defineTopic(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "TopicAdmin"
 , "c2" : "TopicAdmin(Map<String,Object>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "TopicAdmin"
 , "c2" : "TopicAdmin(Map<String,Object>;Admin)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "TopicAdmin"
 , "c2" : "TopicAdmin(Map<String,Object>;Admin;boolean)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Admin"
 , "c2" : "admin()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "createTopic(NewTopic)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Set<String>"
 , "c2" : "createTopics(NewTopic...)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "createOrFindTopic(NewTopic)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "TopicCreationResponse"
 , "c2" : "createOrFindTopics(NewTopic...)"
 , "c3" : "13"
 , "c4" : "29"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,TopicDescription>"
 , "c2" : "describeTopics(String...)"
 , "c3" : "6"
 , "c4" : "19"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "verifyTopicCleanupPolicyOnlyCompact(String;String;String)"
 , "c3" : "3"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "Set<String>"
 , "c2" : "topicCleanupPolicy(String)"
 , "c3" : "3"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "Config"
 , "c2" : "describeTopicConfig(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,Config>"
 , "c2" : "describeTopicConfigs(String...)"
 , "c3" : "11"
 , "c4" : "24"
}} 
,
{ "ligne" : {
   "c1" : "Map<TopicPartition,Long>"
 , "c2" : "endOffsets(Set<TopicPartition>)"
 , "c3" : "13"
 , "c4" : "23"
}} 
,
{ "ligne" : {
   "c1" : "Map<TopicPartition,Long>"
 , "c2" : "retryEndOffsets(Set<TopicPartition>;Duration;long)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close(Duration)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "bootstrapServers()"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.svg" }

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
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "11"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "28"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "90"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "21"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00051] The class TopicAdmin contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00055] The class TopicCreationResponse contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#73"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00073] For method isCreated arguments String  topicName"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#77"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00077] For method isExisting arguments String  topicName"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00081] For method isCreatedOrExisting arguments String  topicName"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.connect.util.TopicAdmin.TopicCreationResponse.isEmpty@POLYN298729 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.connect.util.TopicAdmin.TopicCreationResponse.toString@POLYN298865 the MagicNumber/String  'TopicCreationResponse{' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.connect.util.TopicAdmin.TopicCreationResponse.toString@POLYN298865 the MagicNumber/String  'created=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.connect.util.TopicAdmin.TopicCreationResponse.toString@POLYN298865 the MagicNumber/String  ', existing=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.connect.util.TopicAdmin.TopicCreationResponse.toString@POLYN298865 the MagicNumber/String  '}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#81"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00081] Public method isCreatedOrExisting is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#93"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00093] Public method createdOrExistingTopicsCount is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#97"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00097] Public method isEmpty is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00116] The class NewTopicBuilder contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#127"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00127] For method partitions arguments int  numPartitions"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#139"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00139] For method replicationFactor arguments short  replicationFactor"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#157"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00157] For method minInSyncReplicas arguments short  minInSyncReplicas"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#163"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00163] For method uncleanLeaderElection arguments boolean  allow"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#169"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00169] For method config arguments Map&lt;String ,Object &gt;  configs"
}} 
,
{ "ligne" : {
   "c1" : "00172"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00172] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.connect.util.TopicAdmin.NewTopicBuilder.config@POLYN302721 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.connect.util.TopicAdmin.NewTopicBuilder.config@POLYN302721 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.connect.util.TopicAdmin.NewTopicBuilder.config@POLYN302721 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#127"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00127] Public method partitions is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#133"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00133] Public method defaultPartitions is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#139"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00139] Public method replicationFactor is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#145"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00145] Public method defaultReplicationFactor is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#151"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00151] Public method compacted is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#157"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00157] Public method minInSyncReplicas is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#163"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00163] Public method uncleanLeaderElection is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#169"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00169] Public method config is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#192"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00192] For method defineTopic arguments String  topicName"
}} 
,
{ "ligne" : {
   "c1" : "00208"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.connect.util.TopicAdmin.TopicAdmin@POLYN304728 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00214"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.connect.util.TopicAdmin.TopicAdmin@POLYN304948 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00224"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#224"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00224] For method createTopic arguments NewTopic  topic"
}} 
,
{ "ligne" : {
   "c1" : "00225"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#225"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00225] In method org.apache.kafka.connect.util.TopicAdmin.createTopic@POLYN305905 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00225"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#225"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00225] In method org.apache.kafka.connect.util.TopicAdmin.createTopic@POLYN305905 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00231"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#231"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00231] For method createTopics arguments NewTopic  ...topics"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#236"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00236] For method createOrFindTopic arguments NewTopic  topic"
}} 
,
{ "ligne" : {
   "c1" : "00237"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#237"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00237] In method org.apache.kafka.connect.util.TopicAdmin.createOrFindTopic@POLYN307440 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00237"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#237"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00237] In method org.apache.kafka.connect.util.TopicAdmin.createOrFindTopic@POLYN307440 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00242"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#242"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00242] For method createOrFindTopics arguments NewTopic  ...topics"
}} 
,
{ "ligne" : {
   "c1" : "00261"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#261"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00261] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00268"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#268"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00268] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00269"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#269"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00269] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00270"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#270"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00270] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00275"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#275"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00275] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00281"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#281"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00281] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00287"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#287"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00287] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00293"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#293"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00293] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00297"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#297"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00297] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00304] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00244"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#244"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00244] In method org.apache.kafka.connect.util.TopicAdmin.createOrFindTopics@POLYN308348 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.connect.util.TopicAdmin.createOrFindTopics@POLYN308348 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00251"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00251] In method org.apache.kafka.connect.util.TopicAdmin.createOrFindTopics@POLYN308348 the MagicNumber/String  '', '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00254"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#254"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00254] In method org.apache.kafka.connect.util.TopicAdmin.createOrFindTopics@POLYN308348 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00265"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00265] In method org.apache.kafka.connect.util.TopicAdmin.createOrFindTopics@POLYN308348 the MagicNumber/String  'Created topic {} on brokers at {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00271"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00271] In method org.apache.kafka.connect.util.TopicAdmin.createOrFindTopics@POLYN308348 the MagicNumber/String  'Found existing topic '{}' on the brokers at {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00276"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00276] In method org.apache.kafka.connect.util.TopicAdmin.createOrFindTopics@POLYN308348 the MagicNumber/String  'Unable to create topic(s) '{}' since the brokers at {} do not support the CreateTopics API.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00277"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#277"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00277] In method org.apache.kafka.connect.util.TopicAdmin.createOrFindTopics@POLYN308348 the MagicNumber/String  ' Falling back to assume topic(s) exist or will be auto-created by the broker.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00282"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#282"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00282] In method org.apache.kafka.connect.util.TopicAdmin.createOrFindTopics@POLYN308348 the MagicNumber/String  'Not authorized to create topic(s) '{}' upon the brokers {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00283"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#283"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00283] In method org.apache.kafka.connect.util.TopicAdmin.createOrFindTopics@POLYN308348 the MagicNumber/String  ' Falling back to assume topic(s) exist or will be auto-created by the broker.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00288"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00288] In method org.apache.kafka.connect.util.TopicAdmin.createOrFindTopics@POLYN308348 the MagicNumber/String  'Not authorized to create topic(s) '{}' upon the brokers {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00289"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#289"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00289] In method org.apache.kafka.connect.util.TopicAdmin.createOrFindTopics@POLYN308348 the MagicNumber/String  ' Falling back to assume topic(s) exist or will be auto-created by the broker.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00294"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method org.apache.kafka.connect.util.TopicAdmin.createOrFindTopics@POLYN308348 the MagicNumber/String  'Unable to create topic(s) '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00294"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method org.apache.kafka.connect.util.TopicAdmin.createOrFindTopics@POLYN308348 the MagicNumber/String  '': ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00299"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#299"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00299] In method org.apache.kafka.connect.util.TopicAdmin.createOrFindTopics@POLYN308348 the MagicNumber/String  'Timed out while checking for or creating topic(s) '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00299"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#299"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00299] In method org.apache.kafka.connect.util.TopicAdmin.createOrFindTopics@POLYN308348 the MagicNumber/String  ''.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00300"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00300] In method org.apache.kafka.connect.util.TopicAdmin.createOrFindTopics@POLYN308348 the MagicNumber/String  ' This could indicate a connectivity issue, unavailable topic partitions, or if' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00301"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method org.apache.kafka.connect.util.TopicAdmin.createOrFindTopics@POLYN308348 the MagicNumber/String  ' this is your first use of the topic it may have taken too long to create.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00303"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#303"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00303] In method org.apache.kafka.connect.util.TopicAdmin.createOrFindTopics@POLYN308348 the MagicNumber/String  'Error while attempting to create/find topic(s) '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00303"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#303"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00303] In method org.apache.kafka.connect.util.TopicAdmin.createOrFindTopics@POLYN308348 the MagicNumber/String  ''' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00306"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#306"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00306] In method org.apache.kafka.connect.util.TopicAdmin.createOrFindTopics@POLYN308348 the MagicNumber/String  'Interrupted while attempting to create/find topic(s) '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00306"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#306"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00306] In method org.apache.kafka.connect.util.TopicAdmin.createOrFindTopics@POLYN308348 the MagicNumber/String  ''' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00313"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#313"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00313] For method describeTopics arguments String  ...topics"
}} 
,
{ "ligne" : {
   "c1" : "00314"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#314"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00314] In method org.apache.kafka.connect.util.TopicAdmin.describeTopics@POLYN312858 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00318"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#318"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00318] In method org.apache.kafka.connect.util.TopicAdmin.describeTopics@POLYN312858 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00331"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#331"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00331] In method org.apache.kafka.connect.util.TopicAdmin.describeTopics@POLYN312858 the MagicNumber/String  'Topic '{}' does not exist on the brokers at {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00335"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#335"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00335] In method org.apache.kafka.connect.util.TopicAdmin.describeTopics@POLYN312858 the MagicNumber/String  'Not authorized to describe topic(s) '%s' on the brokers %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00340"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#340"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00340] In method org.apache.kafka.connect.util.TopicAdmin.describeTopics@POLYN312858 the MagicNumber/String  'Unable to describe topic(s) '%s' since the brokers ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00341"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#341"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00341] In method org.apache.kafka.connect.util.TopicAdmin.describeTopics@POLYN312858 the MagicNumber/String  'at %s do not support the DescribeTopics API.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00347"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#347"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00347] In method org.apache.kafka.connect.util.TopicAdmin.describeTopics@POLYN312858 the MagicNumber/String  'Timed out while describing topics '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00347"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#347"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00347] In method org.apache.kafka.connect.util.TopicAdmin.describeTopics@POLYN312858 the MagicNumber/String  ''' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00349"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#349"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00349] In method org.apache.kafka.connect.util.TopicAdmin.describeTopics@POLYN312858 the MagicNumber/String  'Error while attempting to describe topics '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00349"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#349"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00349] In method org.apache.kafka.connect.util.TopicAdmin.describeTopics@POLYN312858 the MagicNumber/String  ''' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00352"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#352"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00352] In method org.apache.kafka.connect.util.TopicAdmin.describeTopics@POLYN312858 the MagicNumber/String  'Interrupted while attempting to describe topics '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00352"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#352"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00352] In method org.apache.kafka.connect.util.TopicAdmin.describeTopics@POLYN312858 the MagicNumber/String  ''' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00359"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#359"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00359] For method verifyTopicCleanupPolicyOnlyCompact arguments String  topic|String  workerTopicConfig|String  topicPurpose"
}} 
,
{ "ligne" : {
   "c1" : "00363"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#363"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00363] In method org.apache.kafka.connect.util.TopicAdmin.verifyTopicCleanupPolicyOnlyCompact@POLYN315809 the MagicNumber/String  'Unable to use admin client to verify the cleanup policy of '{}' ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00364"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#364"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00364] In method org.apache.kafka.connect.util.TopicAdmin.verifyTopicCleanupPolicyOnlyCompact@POLYN315809 the MagicNumber/String  'topic is '{}', either because the broker is an older ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00365"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#365"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00365] In method org.apache.kafka.connect.util.TopicAdmin.verifyTopicCleanupPolicyOnlyCompact@POLYN315809 the MagicNumber/String  'version or because the Kafka principal used for Connect ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00366"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#366"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00366] In method org.apache.kafka.connect.util.TopicAdmin.verifyTopicCleanupPolicyOnlyCompact@POLYN315809 the MagicNumber/String  'internal topics does not have the required permission to ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00367"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00367] In method org.apache.kafka.connect.util.TopicAdmin.verifyTopicCleanupPolicyOnlyCompact@POLYN315809 the MagicNumber/String  'describe topic configurations.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00368"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#368"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00368] In method org.apache.kafka.connect.util.TopicAdmin.verifyTopicCleanupPolicyOnlyCompact@POLYN315809 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00372"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#372"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00372] In method org.apache.kafka.connect.util.TopicAdmin.verifyTopicCleanupPolicyOnlyCompact@POLYN315809 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00373"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#373"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00373] In method org.apache.kafka.connect.util.TopicAdmin.verifyTopicCleanupPolicyOnlyCompact@POLYN315809 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00374"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#374"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00374] In method org.apache.kafka.connect.util.TopicAdmin.verifyTopicCleanupPolicyOnlyCompact@POLYN315809 the MagicNumber/String  'Topic '%s' supplied via the '%s' property is required ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00375"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#375"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00375] In method org.apache.kafka.connect.util.TopicAdmin.verifyTopicCleanupPolicyOnlyCompact@POLYN315809 the MagicNumber/String  'to have '%s=%s' to guarantee consistency and durability of ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00376"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#376"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00376] In method org.apache.kafka.connect.util.TopicAdmin.verifyTopicCleanupPolicyOnlyCompact@POLYN315809 the MagicNumber/String  '%s, but found the topic currently has '%s=%s'. Continuing would likely ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00377"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#377"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00377] In method org.apache.kafka.connect.util.TopicAdmin.verifyTopicCleanupPolicyOnlyCompact@POLYN315809 the MagicNumber/String  'result in eventually losing %s and problems restarting this Connect ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00378"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#378"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00378] In method org.apache.kafka.connect.util.TopicAdmin.verifyTopicCleanupPolicyOnlyCompact@POLYN315809 the MagicNumber/String  'cluster in the future. Change the '%s' property in the ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00379"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#379"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00379] In method org.apache.kafka.connect.util.TopicAdmin.verifyTopicCleanupPolicyOnlyCompact@POLYN315809 the MagicNumber/String  'Connect worker configurations to use a topic with '%s=%s'.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00385"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#385"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00385] In method org.apache.kafka.connect.util.TopicAdmin.verifyTopicCleanupPolicyOnlyCompact@POLYN315809 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00389"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#389"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00389] For method topicCleanupPolicy arguments String  topic"
}} 
,
{ "ligne" : {
   "c1" : "00391"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#391"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00391] In method org.apache.kafka.connect.util.TopicAdmin.topicCleanupPolicy@POLYN317622 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00393"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00393] In method org.apache.kafka.connect.util.TopicAdmin.topicCleanupPolicy@POLYN317622 the MagicNumber/String  'Unable to find topic '{}' when getting cleanup policy' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00397"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#397"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00397] In method org.apache.kafka.connect.util.TopicAdmin.topicCleanupPolicy@POLYN317622 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00397"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#397"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00397] In method org.apache.kafka.connect.util.TopicAdmin.topicCleanupPolicy@POLYN317622 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00399"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#399"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00399] In method org.apache.kafka.connect.util.TopicAdmin.topicCleanupPolicy@POLYN317622 the MagicNumber/String  'Found cleanup.policy={} for topic '{}'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00400"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#400"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00400] In method org.apache.kafka.connect.util.TopicAdmin.topicCleanupPolicy@POLYN317622 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00408"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#408"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00408] In method org.apache.kafka.connect.util.TopicAdmin.topicCleanupPolicy@POLYN317622 the MagicNumber/String  'Found no cleanup.policy for topic '{}'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00413"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#413"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00413] For method describeTopicConfig arguments String  topic"
}} 
,
{ "ligne" : {
   "c1" : "00418"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#418"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00418] For method describeTopicConfigs arguments String  ...topicNames"
}} 
,
{ "ligne" : {
   "c1" : "00419"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#419"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00419] In method org.apache.kafka.connect.util.TopicAdmin.describeTopicConfigs@POLYN320208 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00431"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method org.apache.kafka.connect.util.TopicAdmin.describeTopicConfigs@POLYN320208 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00447"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#447"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00447] In method org.apache.kafka.connect.util.TopicAdmin.describeTopicConfigs@POLYN320208 the MagicNumber/String  'Topic '{}' does not exist on the brokers at {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00448"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#448"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00448] In method org.apache.kafka.connect.util.TopicAdmin.describeTopicConfigs@POLYN320208 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00450"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#450"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00450] In method org.apache.kafka.connect.util.TopicAdmin.describeTopicConfigs@POLYN320208 the MagicNumber/String  'Not authorized to describe topic config for topic '{}' on brokers at {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00452"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#452"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00452] In method org.apache.kafka.connect.util.TopicAdmin.describeTopicConfigs@POLYN320208 the MagicNumber/String  'API to describe topic config for topic '{}' is unsupported on brokers at {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00454"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#454"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00454] In method org.apache.kafka.connect.util.TopicAdmin.describeTopicConfigs@POLYN320208 the MagicNumber/String  'Timed out while waiting to describe topic config for topic '%s' on brokers at %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00458"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#458"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00458] In method org.apache.kafka.connect.util.TopicAdmin.describeTopicConfigs@POLYN320208 the MagicNumber/String  'Error while attempting to describe topic config for topic '%s' on brokers at %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00464"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#464"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00464] In method org.apache.kafka.connect.util.TopicAdmin.describeTopicConfigs@POLYN320208 the MagicNumber/String  'Interrupted while attempting to describe topic configs '%s'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00472"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#472"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00472] For method endOffsets arguments Set&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {
   "c1" : "00482"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#482"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00482] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00484"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#484"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00484] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00485"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#485"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00485] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00486"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#486"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00486] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00487"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#487"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00487] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00488"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#488"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00488] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00490"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#490"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00490] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00493"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#493"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00493] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00495"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#495"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00495] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00496"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#496"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00496] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00498"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#498"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00498] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00499"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#499"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00499] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00501"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#501"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00501] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00502"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#502"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00502] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00504"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#504"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00504] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00507"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#507"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00507] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00509"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#509"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00509] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00473"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#473"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00473] In method org.apache.kafka.connect.util.TopicAdmin.endOffsets@POLYN324262 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00488"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#488"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00488] In method org.apache.kafka.connect.util.TopicAdmin.endOffsets@POLYN324262 the MagicNumber/String  'Not authorized to get the end offsets for topic '%s' on brokers at %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00493"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#493"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00493] In method org.apache.kafka.connect.util.TopicAdmin.endOffsets@POLYN324262 the MagicNumber/String  'API to get the get the end offsets for topic '%s' is unsupported on brokers at %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00496"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#496"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00496] In method org.apache.kafka.connect.util.TopicAdmin.endOffsets@POLYN324262 the MagicNumber/String  'Timed out while waiting to get end offsets for topic '%s' on brokers at %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00499"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#499"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00499] In method org.apache.kafka.connect.util.TopicAdmin.endOffsets@POLYN324262 the MagicNumber/String  'Unable to get end offsets during leader election for topic '%s' on brokers at %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00504"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#504"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00504] In method org.apache.kafka.connect.util.TopicAdmin.endOffsets@POLYN324262 the MagicNumber/String  'Error while getting end offsets for topic '%s' on brokers at %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00509"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#509"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00509] In method org.apache.kafka.connect.util.TopicAdmin.endOffsets@POLYN324262 the MagicNumber/String  'Interrupted while attempting to read end offsets for topic '%s' on brokers at %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00517"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#517"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00517] For method retryEndOffsets arguments Set&lt;TopicPartition &gt;  partitions|Duration  timeoutDuration|long  retryBackoffMs"
}} 
,
{ "ligne" : {
   "c1" : "00517"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#517"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00517] The argument partitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00522"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#522"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00522] In method org.apache.kafka.connect.util.TopicAdmin.retryEndOffsets@POLYN328223 the MagicNumber/String  'list offsets for topic partitions' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00529"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#529"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00529] In method org.apache.kafka.connect.util.TopicAdmin.retryEndOffsets@POLYN328223 the MagicNumber/String  'Failed to list offsets for topic partitions.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00538"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#538"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00538] For method close arguments Duration  timeout"
}} 
,
{ "ligne" : {
   "c1" : "00544"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#544"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00544] In method org.apache.kafka.connect.util.TopicAdmin.bootstrapServers@POLYN329078 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00544"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicAdmin.java.html#544"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00544] In method org.apache.kafka.connect.util.TopicAdmin.bootstrapServers@POLYN329078 the MagicNumber/String  '&amp;lt;unknown&amp;gt;' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
