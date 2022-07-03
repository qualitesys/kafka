console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java 37 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.consumer.internals.ConsumerProtocol"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.consumer.internals.ConsumerProtocol" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "short"
 , "c2" : "deserializeVersion(ByteBuffer)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ByteBuffer"
 , "c2" : "serializeSubscription(Subscription)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ByteBuffer"
 , "c2" : "serializeSubscription(Subscription;short)"
 , "c3" : "3"
 , "c4" : "13"
}} 
,
{ "ligne" : {
   "c1" : "Subscription"
 , "c2" : "deserializeSubscription(ByteBuffer;short)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "Subscription"
 , "c2" : "deserializeSubscription(ByteBuffer)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ByteBuffer"
 , "c2" : "serializeAssignment(Assignment)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ByteBuffer"
 , "c2" : "serializeAssignment(Assignment;short)"
 , "c3" : "2"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "Assignment"
 , "c2" : "deserializeAssignment(ByteBuffer;short)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "Assignment"
 , "c2" : "deserializeAssignment(ByteBuffer)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "short"
 , "c2" : "checkSubscriptionVersion(short)"
 , "c3" : "5"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "short"
 , "c2" : "checkAssignmentVersion(short)"
 , "c3" : "5"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.svg" }

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
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
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
 , "c4" : "16"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "11"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00021] The class ConsumerProtocol contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html#37"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00037] For method deserializeVersion arguments ByteBuffer  buffer"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html#37"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00037] The argument buffer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.clients.consumer.internals.ConsumerProtocol.deserializeVersion@POLYN190612 the MagicNumber/String  'Buffer underflow while parsing consumer protocol's header' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00045] For method serializeSubscription arguments Subscription  subscription"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html#49"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00049] For method serializeSubscription arguments Subscription  subscription|short  version"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html#49"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00049] For method serializeSubscription list of called methods Object monObjet|short checkSubscriptionVersionN191212"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html#49"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00049] The argument subscription is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.clients.consumer.internals.ConsumerProtocol.serializeSubscription@POLYN191088 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.clients.consumer.internals.ConsumerProtocol.serializeSubscription@POLYN191088 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.clients.consumer.internals.ConsumerProtocol.serializeSubscription@POLYN191088 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.clients.consumer.internals.ConsumerProtocol.serializeSubscription@POLYN191088 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00074] For method deserializeSubscription arguments ByteBuffer  buffer|short  version"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00074] For method deserializeSubscription list of called methods Object monObjet|short checkSubscriptionVersionN193047"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00083] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.clients.consumer.internals.ConsumerProtocol.deserializeSubscription@POLYN192923 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.clients.consumer.internals.ConsumerProtocol.deserializeSubscription@POLYN192923 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.clients.consumer.internals.ConsumerProtocol.deserializeSubscription@POLYN192923 the MagicNumber/String  'Buffer underflow while parsing consumer protocol's subscription' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html#97"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00097] For method deserializeSubscription arguments ByteBuffer  buffer"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html#101"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00101] For method serializeAssignment arguments Assignment  assignment"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html#105"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00105] For method serializeAssignment arguments Assignment  assignment|short  version"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html#105"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00105] For method serializeAssignment list of called methods Object monObjet|short checkAssignmentVersionN194656"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html#105"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00105] The argument assignment is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.clients.consumer.internals.ConsumerProtocol.serializeAssignment@POLYN194532 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.clients.consumer.internals.ConsumerProtocol.serializeAssignment@POLYN194532 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.clients.consumer.internals.ConsumerProtocol.serializeAssignment@POLYN194532 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html#121"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00121] For method deserializeAssignment arguments ByteBuffer  buffer|short  version"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html#121"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00121] For method deserializeAssignment list of called methods Object monObjet|short checkAssignmentVersionN195886"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00130] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.clients.consumer.internals.ConsumerProtocol.deserializeAssignment@POLYN195762 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.clients.consumer.internals.ConsumerProtocol.deserializeAssignment@POLYN195762 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.clients.consumer.internals.ConsumerProtocol.deserializeAssignment@POLYN195762 the MagicNumber/String  'Buffer underflow while parsing consumer protocol's assignment' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html#143"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00143] For method deserializeAssignment arguments ByteBuffer  buffer"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html#147"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00147] For method checkSubscriptionVersion arguments short  version"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method org.apache.kafka.clients.consumer.internals.ConsumerProtocol.checkSubscriptionVersion@POLYN197152 the MagicNumber/String  'Unsupported subscription version: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html#156"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00156] For method checkAssignmentVersion arguments short  version"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerProtocol.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.clients.consumer.internals.ConsumerProtocol.checkAssignmentVersion@POLYN197530 the MagicNumber/String  'Unsupported assignment version: ' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
