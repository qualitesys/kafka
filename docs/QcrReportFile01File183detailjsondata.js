console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java 22 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractStickyAssignor"
 , "c2" : ""
 , "c2" : "org.apache.kafka.clients.consumer.CooperativeStickyAssignor"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.consumer.CooperativeStickyAssignor" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00060"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#60"
 , "c1" : "String"
 , "c2" : "name()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00065"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#65"
 , "c1" : "List&lt;RebalanceProtocol&gt;"
 , "c2" : "supportedProtocols()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00070"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#70"
 , "c1" : "void"
 , "c2" : "onAssignment(Assignment;ConsumerGroupMetadata)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#75"
 , "c1" : "ByteBuffer"
 , "c2" : "subscriptionUserData(Set&lt;String&gt;)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00086"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#86"
 , "c1" : "MemberData"
 , "c2" : "memberData(Subscription)"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00103"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#103"
 , "c1" : "Map&lt;String,List&lt;TopicPartition&gt;&gt;"
 , "c2" : "assign(Map&lt;String,Integer&gt;;Map&lt;String,Subscription&gt;)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00116"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#116"
 , "c1" : "void"
 , "c2" : "adjustAssignment(Map&lt;String,List&lt;TopicPartition&gt;&gt;;Map&lt;TopicPartition,String&gt;)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00123"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#123"
 , "c1" : "Map&lt;TopicPartition,String&gt;"
 , "c2" : "computePartitionsTransferringOwnership(Map&lt;String,Subscription&gt;;Map&lt;String,List&lt;TopicPartition&gt;&gt;)"
 , "c3" : "6"
 , "c4" : "11"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.svg" }

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
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "7"
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
 , "c4" : "6"
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
 , "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00070] For method onAssignment arguments Assignment  assignment|ConsumerGroupMetadata  metadata"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00070] For method onAssignment list of called methods Object monObjet|int metadata_generationIdN177621"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#70"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00070] The argument metadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method subscriptionUserData arguments Set&lt;String &gt;  topics"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#86"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00086] For method memberData arguments Subscription  subscription"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#86"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00086] The argument subscription is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.clients.consumer.CooperativeStickyAssignor.memberData@POLYN178299 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#103"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00103] For method assign arguments Map&lt;String ,Integer &gt;  partitionsPerTopic|Map&lt;String ,Subscription &gt;  subscriptions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.clients.consumer.CooperativeStickyAssignor.assign@POLYN179246 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#115"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00115] For method adjustAssignment arguments Map&lt;String ,List&lt;TopicPartition &gt; &gt;  assignments|Map&lt;TopicPartition ,String &gt;  partitionsTransferringOwnership"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#116"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00116] The argument assignments is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#117"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00117] The argument partitionsTransferringOwnership is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#123"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00123] For method computePartitionsTransferringOwnership arguments Map&lt;String ,Subscription &gt;  subscriptions|Map&lt;String ,List&lt;TopicPartition &gt; &gt;  assignments"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#123"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00123] The argument subscriptions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#124"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00124] The argument assignments is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00129] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00131] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00132] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00134] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00135] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00140] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00141] Avoid declaring class instance within loop, performance impact"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
