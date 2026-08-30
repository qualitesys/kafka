console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/StickyAssignor.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/consumer/StickyAssignor.java 22 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractStickyAssignor"
 , "c2" : ""
 , "c2" : "org.apache.kafka.clients.consumer.StickyAssignor"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.consumer.StickyAssignor" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00199"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/StickyAssignor.java.html#199"
 , "c1" : "String"
 , "c2" : "name()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00204"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/StickyAssignor.java.html#204"
 , "c1" : "void"
 , "c2" : "onAssignment(Assignment;ConsumerGroupMetadata)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00210"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/StickyAssignor.java.html#210"
 , "c1" : "ByteBuffer"
 , "c2" : "subscriptionUserData(Set&lt;String&gt;)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00218"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/StickyAssignor.java.html#218"
 , "c1" : "MemberData"
 , "c2" : "memberData(Subscription)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00227"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/StickyAssignor.java.html#227"
 , "c1" : "ByteBuffer"
 , "c2" : "serializeTopicPartitionAssignment(MemberData)"
 , "c3" : "3"
 , "c4" : "12"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00245"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/StickyAssignor.java.html#245"
 , "c1" : "MemberData"
 , "c2" : "deserializeTopicPartitionAssignment(ByteBuffer)"
 , "c3" : "3"
 , "c4" : "12"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/StickyAssignor.java.svg" }

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
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "9"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "3"
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
 , "c1" : "00204"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/StickyAssignor.java.html#204"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00204] For method onAssignment arguments Assignment  assignment|ConsumerGroupMetadata  metadata"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00204"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/StickyAssignor.java.html#204"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00204] The argument assignment is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00204"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/StickyAssignor.java.html#204"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00204] The argument metadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00210"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/StickyAssignor.java.html#210"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00210] For method subscriptionUserData arguments Set&lt;String &gt;  topics"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00211"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/StickyAssignor.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00211] In method org.apache.kafka.clients.consumer.StickyAssignor.subscriptionUserData@POLYN219190 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00212"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/StickyAssignor.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method org.apache.kafka.clients.consumer.StickyAssignor.subscriptionUserData@POLYN219190 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00218"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/StickyAssignor.java.html#218"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00218] For method memberData arguments Subscription  subscription"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00218"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/StickyAssignor.java.html#218"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00218] The argument subscription is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00220"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/StickyAssignor.java.html#220"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00220] In method org.apache.kafka.clients.consumer.StickyAssignor.memberData@POLYN219556 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00227"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/StickyAssignor.java.html#227"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00227] For method serializeTopicPartitionAssignment arguments MemberData  memberData"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00227"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/StickyAssignor.java.html#227"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00227] The argument memberData is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00231"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/StickyAssignor.java.html#231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00231] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00245"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/StickyAssignor.java.html#245"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00245] For method deserializeTopicPartitionAssignment arguments ByteBuffer  buffer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00245"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/StickyAssignor.java.html#245"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00245] The argument buffer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00262"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/StickyAssignor.java.html#262"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00262] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00262"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/StickyAssignor.java.html#262"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00262] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00263"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/StickyAssignor.java.html#263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00263] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00264"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/StickyAssignor.java.html#264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00264] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00265"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/StickyAssignor.java.html#265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00265] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00265"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/StickyAssignor.java.html#265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00265] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00265"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/StickyAssignor.java.html#265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00265] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00265"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/StickyAssignor.java.html#265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00265] Avoid declaring class instance within loop, performance impact"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/StickyAssignor.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
