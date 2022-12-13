console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java 21 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractStickyAssignor"
 , "c2" : "org.apache.kafka.clients.consumer.CooperativeStickyAssignor"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.consumer.CooperativeStickyAssignor" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00031"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#31"
 , "c1" : "String"
 , "c2" : "name()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00036"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#36"
 , "c1" : "List<RebalanceProtocol>"
 , "c2" : "supportedProtocols()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00041"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#41"
 , "c1" : "void"
 , "c2" : "onAssignment(Assignment;ConsumerGroupMetadata)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00046"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#46"
 , "c1" : "ByteBuffer"
 , "c2" : "subscriptionUserData(Set<String>)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#57"
 , "c1" : "MemberData"
 , "c2" : "memberData(Subscription)"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00074"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#74"
 , "c1" : "Map<String,List<TopicPartition>>"
 , "c2" : "assign(Map<String,Integer>;Map<String,Subscription>)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00087"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#87"
 , "c1" : "void"
 , "c2" : "adjustAssignment(Map<String,List<TopicPartition>>;Map<TopicPartition,String>)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00094"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#94"
 , "c1" : "Map<TopicPartition,String>"
 , "c2" : "computePartitionsTransferringOwnership(Map<String,Subscription>;Map<String,List<TopicPartition>>)"
 , "c3" : "6"
 , "c4" : "11"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.svg" }

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
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#41"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00041] For method onAssignment arguments Assignment  assignment|ConsumerGroupMetadata  metadata"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#41"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00041] The argument metadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#46"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00046] For method subscriptionUserData arguments Set&lt;String &gt;  topics"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method memberData arguments Subscription  subscription"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#57"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00057] The argument subscription is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.clients.consumer.CooperativeStickyAssignor.memberData@POLYN166663 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00074] For method assign arguments Map&lt;String ,Integer &gt;  partitionsPerTopic|Map&lt;String ,Subscription &gt;  subscriptions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.clients.consumer.CooperativeStickyAssignor.assign@POLYN167604 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#86"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00086] For method adjustAssignment arguments Map&lt;String ,List&lt;TopicPartition &gt; &gt;  assignments|Map&lt;TopicPartition ,String &gt;  partitionsTransferringOwnership"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#87"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00087] The argument assignments is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#88"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00088] The argument partitionsTransferringOwnership is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#94"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00094] For method computePartitionsTransferringOwnership arguments Map&lt;String ,Subscription &gt;  subscriptions|Map&lt;String ,List&lt;TopicPartition &gt; &gt;  assignments"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#94"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00094] The argument subscriptions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#95"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00095] The argument assignments is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00100] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00102] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00103] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00105] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00106] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00111] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00112] Avoid declaring class instance within loop, performance impact"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/CooperativeStickyAssignor.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
