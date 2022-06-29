console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java 77 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AdminApiHandler.Batched<TopicPartition,PartitionProducerState>"
 , "c2" : "org.apache.kafka.clients.admin.internals.DescribeProducersHandler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.internals.DescribeProducersHandler" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "DescribeProducersHandler"
 , "c2" : "DescribeProducersHandler(DescribeProducersOptions;LogContext)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "AdminApiFuture.SimpleAdminApiFuture<TopicPartition,PartitionProducerState>"
 , "c2" : "newFuture(Collection<TopicPartition>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "apiName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "AdminApiLookupStrategy<TopicPartition>"
 , "c2" : "lookupStrategy()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "DescribeProducersRequest.Builder"
 , "c2" : "buildBatchedRequest(int;Set<TopicPartition>)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handlePartitionError(TopicPartition;ApiError;Map<TopicPartition,Throwable>;List<TopicPartition>)"
 , "c3" : "7"
 , "c4" : "17"
}} 
,
{ "ligne" : {
   "c1" : "ApiResult<TopicPartition,PartitionProducerState>"
 , "c2" : "handleResponse(Node;Set<TopicPartition>;AbstractResponse)"
 , "c3" : "4"
 , "c4" : "15"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.svg" }

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
 , "c4" : "24"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "13"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "25"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
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
   "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#40"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00040] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#41"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00041] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00053] For method newFuture arguments Collection&lt;TopicPartition &gt;  topicPartitions"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.apiName@POLYN189612 the MagicNumber/String  'describeProducers' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00070] For method buildBatchedRequest arguments int  brokerId|Set&lt;TopicPartition &gt;  topicPartitions"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#86"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00086] For method handlePartitionError arguments TopicPartition  topicPartition|ApiError  apiError|Map&lt;TopicPartition ,Throwable &gt;  failed|List&lt;TopicPartition &gt;  unmapped"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#86"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00086] For method handlePartitionError list of called methods Object monObjet|org.apache.kafka.clients.admin.DescribeProducersOptions options_brokerIdN190813"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#87"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00087] The argument topicPartition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#88"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00088] The argument apiError is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#89"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00089] The argument failed is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#90"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00090] The argument unmapped is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String  'Not leader error in `DescribeProducers` response for partition {} ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String  'for brokerId {} set in options' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String  'Failed to describe active producers ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String  'for partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String  ' on brokerId ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String  'Not leader error in `DescribeProducers` response for partition {}. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String  'Will retry later.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String  'Unknown topic/partition error in `DescribeProducers` response for partition {}. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String  'Will retry later.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String  'Invalid topic in `DescribeProducers` response for partition {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String  'Failed to fetch metadata for partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String  ' due to invalid topic error: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String  'Authorization failed in `DescribeProducers` response for partition {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String  'Failed to describe ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String  'active producers for partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String  ' due to authorization failure on topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String  ' `' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String  '`' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String  'Unexpected error in `DescribeProducers` response for partition {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String  'Failed to describe active ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String  'producers for partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String  ' due to unexpected error' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#142"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00142] For method handleResponse arguments Node  broker|Set&lt;TopicPartition &gt;  keys|AbstractResponse  abstractResponse"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00153] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00154"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00154] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00157] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00159] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00164] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00166"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00166] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00170] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00154"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00154] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00157] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00159] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00164] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00166"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00166] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00170] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handleResponse@POLYN193200 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00171"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00171] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handleResponse@POLYN193200 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handleResponse@POLYN193200"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.admin.internals.DescribeProducersHandler.DescribeProducersHandler@POLYN188694"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.admin.internals.DescribeProducersHandler.buildBatchedRequest@POLYN189843"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#167"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00167] In the recursive method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handleResponse@POLYN193200 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00171"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#171"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00171] In the recursive method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handleResponse@POLYN193200 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#98"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00098] In the recursive method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String 'Not leader error in `DescribeProducers` response for partition {} ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#99"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00099] In the recursive method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String 'for brokerId {} set in options' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#100"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00100] In the recursive method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String 'Failed to describe active producers ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#101"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00101] In the recursive method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String ' on brokerId ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#101"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00101] In the recursive method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String 'for partition ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#104"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00104] In the recursive method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String 'Not leader error in `DescribeProducers` response for partition {}. ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#105"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00105] In the recursive method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String 'Will retry later.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#111"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00111] In the recursive method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String 'Unknown topic/partition error in `DescribeProducers` response for partition {}. ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#112"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00112] In the recursive method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String 'Will retry later.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#116"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00116] In the recursive method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String 'Invalid topic in `DescribeProducers` response for partition {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#119"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00119] In the recursive method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String 'Failed to fetch metadata for partition ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#120"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00120] In the recursive method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String ' due to invalid topic error: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#125"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00125] In the recursive method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String 'Authorization failed in `DescribeProducers` response for partition {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#127"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00127] In the recursive method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String 'Failed to describe ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#128"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00128] In the recursive method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String ' due to authorization failure on topic' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#128"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00128] In the recursive method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String 'active producers for partition ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#129"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00129] In the recursive method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String ' `' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#129"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00129] In the recursive method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String '`' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#133"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00133] In the recursive method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String 'Unexpected error in `DescribeProducers` response for partition {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#135"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00135] In the recursive method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String 'Failed to describe active ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#136"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00136] In the recursive method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String ' due to unexpected error' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#136"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00136] In the recursive method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN190400 the MagicNumber/String 'producers for partition ' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
