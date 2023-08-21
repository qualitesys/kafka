console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java 17 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AsyncClient<Map<TopicPartition,SubscriptionState.FetchPosition>,OffsetsForLeaderEpochRequest,OffsetsForLeaderEpochResponse,OffsetsForLeaderEpochClient.OffsetForEpochResult>"
 , "c2" : ""
 , "c2" : "org.apache.kafka.clients.consumer.internals.OffsetsForLeaderEpochClient"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.consumer.internals.OffsetsForLeaderEpochClient" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#48"
 , "c1" : "OffsetsForLeaderEpochClient"
 , "c2" : "OffsetsForLeaderEpochClient(ConsumerNetworkClient;LogContext)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00053"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#53"
 , "c1" : "AbstractRequest.Builder&lt;OffsetsForLeaderEpochRequest&gt;"
 , "c2" : "prepareRequest(Node;Map&lt;TopicPartition,SubscriptionState.FetchPosition&gt;)"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#75"
 , "c1" : "OffsetForEpochResult"
 , "c2" : "handleResponse(Node;Map&lt;TopicPartition,SubscriptionState.FetchPosition&gt;;OffsetsForLeaderEpochResponse)"
 , "c3" : "16"
 , "c4" : "21"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.svg" }

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
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE484"
 , "c3" : "Omitted Break Statement in Switch"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00053] For method prepareRequest arguments Node  node|Map&lt;TopicPartition ,SubscriptionState.FetchPosition &gt;  requestData"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#54"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00054] The argument requestData is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.clients.consumer.internals.OffsetsForLeaderEpochClient.prepareRequest@POLYN171802 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method handleResponse arguments Node  node|Map&lt;TopicPartition ,SubscriptionState.FetchPosition &gt;  requestData|OffsetsForLeaderEpochResponse  response"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#77"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00077] The argument requestData is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#78"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00078] The argument response is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00085] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00086] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00093] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00086] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00093] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#119"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE484[00119] Omitted break statement in switch (see http://cwe.mitre.org/data/definitions/484.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.clients.consumer.internals.OffsetsForLeaderEpochClient.handleResponse@POLYN173038 the MagicNumber/String  'Received unrequested topic or partition {} from response, ignoring.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.clients.consumer.internals.OffsetsForLeaderEpochClient.handleResponse@POLYN173038 the MagicNumber/String  'Handling OffsetsForLeaderEpoch response for {}. Got offset {} for epoch {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.clients.consumer.internals.OffsetsForLeaderEpochClient.handleResponse@POLYN173038 the MagicNumber/String  'Attempt to fetch offsets for partition {} failed due to {}, retrying.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.clients.consumer.internals.OffsetsForLeaderEpochClient.handleResponse@POLYN173038 the MagicNumber/String  'Received unknown topic or partition error in OffsetsForLeaderEpoch request for partition {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.clients.consumer.internals.OffsetsForLeaderEpochClient.handleResponse@POLYN173038 the MagicNumber/String  'Attempt to fetch offsets for partition {} failed due to: {}, retrying.' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
