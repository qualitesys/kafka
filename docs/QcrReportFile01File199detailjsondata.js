console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java 25 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "ConsumerPartitionAssignor"
 , "c2" : "org.apache.kafka.clients.consumer.internals.AbstractPartitionAssignor"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.consumer.internals.AbstractPartitionAssignor" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#47"
 , "c1" : "Map&lt;String,List&lt;TopicPartition&gt;&gt;"
 , "c2" : "assign(Map&lt;String,Integer&gt;;Map&lt;String,Subscription&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#51"
 , "c1" : "GroupAssignment"
 , "c2" : "assign(Cluster;GroupSubscription)"
 , "c3" : "6"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00080"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#80"
 , "c1" : "List&lt;TopicPartition&gt;"
 , "c2" : "partitions(String;int)"
 , "c3" : "2"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.svg" }

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
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "4"
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
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "10"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#47"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00047] For method assign arguments Map&lt;String ,Integer &gt;  partitionsPerTopic|Map&lt;String ,Subscription &gt;  subscriptions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#51"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00051] For method assign arguments Cluster  metadata|GroupSubscription  groupSubscription"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#51"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00051] For method assign list of called methods Object monObjet|org.apache.kafka.clients.consumer.ConsumerPartitionAssignor.GroupAssignment metadata_partitionCountForTopicN172130|org.apache.kafka.clients.consumer.ConsumerPartitionAssignor.GroupAssignment assignN172580"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#51"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00051] The argument metadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#51"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00051] The argument groupSubscription is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00059] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.clients.consumer.internals.AbstractPartitionAssignor.assign@POLYN171353 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.clients.consumer.internals.AbstractPartitionAssignor.assign@POLYN171353 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.clients.consumer.internals.AbstractPartitionAssignor.assign@POLYN171353 the MagicNumber/String  'Skipping assignment for topic {} since no metadata is available' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#75"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00075] The argument map is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#80"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00080] For method partitions arguments String  topic|int  numPartitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.clients.consumer.internals.AbstractPartitionAssignor.partitions@POLYN173674 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#97"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00097] For method compareTo arguments MemberInfo  otherMemberInfo"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#97"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00097] The argument otherMemberInfo is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.clients.consumer.internals.AbstractPartitionAssignor.MemberInfo.compareTo@POLYN174641 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.clients.consumer.internals.AbstractPartitionAssignor.MemberInfo.compareTo@POLYN174641 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#112"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00112] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.clients.consumer.internals.AbstractPartitionAssignor.MemberInfo.toString@POLYN175804 the MagicNumber/String  'MemberInfo [member.id: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.clients.consumer.internals.AbstractPartitionAssignor.MemberInfo.toString@POLYN175804 the MagicNumber/String  ', group.instance.id: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.clients.consumer.internals.AbstractPartitionAssignor.MemberInfo.toString@POLYN175804 the MagicNumber/String  '{}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.clients.consumer.internals.AbstractPartitionAssignor.MemberInfo.toString@POLYN175804 the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.AbstractPartitionAssignor.assign@POLYN171353"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#60"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00060] In the recursive method org.apache.kafka.clients.consumer.internals.AbstractPartitionAssignor.assign@POLYN171353 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#60"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00060] In the recursive method org.apache.kafka.clients.consumer.internals.AbstractPartitionAssignor.assign@POLYN171353 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.html#63"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00063] In the recursive method org.apache.kafka.clients.consumer.internals.AbstractPartitionAssignor.assign@POLYN171353 the MagicNumber/String 'Skipping assignment for topic {} since no metadata is available' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractPartitionAssignor.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
