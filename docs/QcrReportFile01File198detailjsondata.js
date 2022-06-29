console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java 23 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "ConsumerPartitionAssignor"
 , "c2" : "org.apache.kafka.clients.consumer.internals.AbstractPartitionAssignor"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.consumer.internals.AbstractPartitionAssignor" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "Map<String,List<TopicPartition>>"
 , "c2" : "assign(Map<String,Integer>;Map<String,Subscription>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "GroupAssignment"
 , "c2" : "assign(Cluster;GroupSubscription)"
 , "c3" : "6"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "List<TopicPartition>"
 , "c2" : "partitions(String;int)"
 , "c3" : "2"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.svg" }

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
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
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
 , "c4" : "5"
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
   "c1" : "00019"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00019] The class AbstractPartitionAssignor contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#23"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00023] For method assign arguments Map&lt;String ,Integer &gt;  partitionsPerTopic|Map&lt;String ,Subscription &gt;  subscriptions"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#27"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00027] For method assign arguments Cluster  metadata|GroupSubscription  groupSubscription"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#27"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00027] For method assign list of called methods Object monObjet|GroupAssignment metadata_partitionCountForTopicN180936|GroupAssignment assignN181384"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#27"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00027] The argument metadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#27"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00027] The argument groupSubscription is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00035] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.clients.consumer.internals.AbstractPartitionAssignor.assign@POLYN180167 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.clients.consumer.internals.AbstractPartitionAssignor.assign@POLYN180167 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.clients.consumer.internals.AbstractPartitionAssignor.assign@POLYN180167 the MagicNumber/String  'Skipping assignment for topic {} since no metadata is available' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#51"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00051] The argument map is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00056] For method partitions arguments String  topic|int  numPartitions"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.clients.consumer.internals.AbstractPartitionAssignor.partitions@POLYN182474 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00063] The class MemberInfo contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#73"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00073] For method compareTo arguments MemberInfo  otherMemberInfo"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#73"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00073] The argument otherMemberInfo is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.clients.consumer.internals.AbstractPartitionAssignor.MemberInfo.compareTo@POLYN183439 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.clients.consumer.internals.AbstractPartitionAssignor.MemberInfo.compareTo@POLYN183439 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#88"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00088] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.clients.consumer.internals.AbstractPartitionAssignor.MemberInfo.toString@POLYN184602 the MagicNumber/String  'MemberInfo [member.id: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.clients.consumer.internals.AbstractPartitionAssignor.MemberInfo.toString@POLYN184602 the MagicNumber/String  ', group.instance.id: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.clients.consumer.internals.AbstractPartitionAssignor.MemberInfo.toString@POLYN184602 the MagicNumber/String  '{}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.clients.consumer.internals.AbstractPartitionAssignor.MemberInfo.toString@POLYN184602 the MagicNumber/String  ']' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
