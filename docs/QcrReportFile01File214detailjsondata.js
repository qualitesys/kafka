console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java 18 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AsyncClient<Map<TopicPartition,SubscriptionState.FetchPosition>,OffsetsForLeaderEpochRequest,OffsetsForLeaderEpochResponse,OffsetsForLeaderEpochClient.OffsetForEpochResult>"
 , "c2" : "org.apache.kafka.clients.consumer.internals.OffsetsForLeaderEpochClient"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.consumer.internals.OffsetsForLeaderEpochClient" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "OffsetsForLeaderEpochClient"
 , "c2" : "OffsetsForLeaderEpochClient(ConsumerNetworkClient;LogContext)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "AbstractRequest.Builder<OffsetsForLeaderEpochRequest>"
 , "c2" : "prepareRequest(Node;Map<TopicPartition,SubscriptionState.FetchPosition>)"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "OffsetForEpochResult"
 , "c2" : "handleResponse(Node;Map<TopicPartition,SubscriptionState.FetchPosition>;OffsetsForLeaderEpochResponse)"
 , "c3" : "16"
 , "c4" : "21"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.svg" }

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
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE484"
 , "c3" : "Omitted Break Statement in Switch"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "5"
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
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#36"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00036] For method prepareRequest arguments Node  node|Map&lt;TopicPartition ,SubscriptionState.FetchPosition &gt;  requestData"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#37"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00037] The argument requestData is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.clients.consumer.internals.OffsetsForLeaderEpochClient.prepareRequest@POLYN161890 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method handleResponse arguments Node  node|Map&lt;TopicPartition ,SubscriptionState.FetchPosition &gt;  requestData|OffsetsForLeaderEpochResponse  response"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#60"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00060] The argument requestData is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#61"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00061] The argument response is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00068] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00069] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00076] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00069] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00076] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#102"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE484[00102] Omitted break statement in switch (see http://cwe.mitre.org/data/definitions/484.html)"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.clients.consumer.internals.OffsetsForLeaderEpochClient.handleResponse@POLYN163122 the MagicNumber/String  'Received unrequested topic or partition {} from response, ignoring.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.clients.consumer.internals.OffsetsForLeaderEpochClient.handleResponse@POLYN163122 the MagicNumber/String  'Handling OffsetsForLeaderEpoch response for {}. Got offset {} for epoch {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.clients.consumer.internals.OffsetsForLeaderEpochClient.handleResponse@POLYN163122 the MagicNumber/String  'Attempt to fetch offsets for partition {} failed due to {}, retrying.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.clients.consumer.internals.OffsetsForLeaderEpochClient.handleResponse@POLYN163122 the MagicNumber/String  'Received unknown topic or partition error in OffsetsForLeaderEpoch request for partition {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.clients.consumer.internals.OffsetsForLeaderEpochClient.handleResponse@POLYN163122 the MagicNumber/String  'Attempt to fetch offsets for partition {} failed due to: {}, retrying.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/OffsetsForLeaderEpochClient.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00115] The class OffsetForEpochResult contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
]
};
console.log('leListeStr 99 main end');
