console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java 49 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "org.apache.kafka.clients.admin.internals.DescribeProducersHandler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.internals.DescribeProducersHandler" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#54"
 , "c1" : "DescribeProducersHandler"
 , "c2" : "DescribeProducersHandler(DescribeProducersOptions;LogContext)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00068"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#68"
 , "c1" : "AdminApiFuture.SimpleAdminApiFuture&lt;TopicPartition,PartitionProducerState&gt;"
 , "c2" : "newFuture(Collection&lt;TopicPartition&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#75"
 , "c1" : "String"
 , "c2" : "apiName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00080"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#80"
 , "c1" : "AdminApiLookupStrategy&lt;TopicPartition&gt;"
 , "c2" : "lookupStrategy()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00085"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#85"
 , "c1" : "DescribeProducersRequest.Builder"
 , "c2" : "buildBatchedRequest(int;Set&lt;TopicPartition&gt;)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00101"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#101"
 , "c1" : "void"
 , "c2" : "handlePartitionError(TopicPartition;ApiError;Map&lt;TopicPartition,Throwable&gt;;List&lt;TopicPartition&gt;)"
 , "c3" : "7"
 , "c4" : "17"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00157"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#157"
 , "c1" : "ApiResult&lt;TopicPartition,PartitionProducerState&gt;"
 , "c2" : "handleResponse(Node;Set&lt;TopicPartition&gt;;AbstractResponse)"
 , "c3" : "4"
 , "c4" : "15"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.svg" }

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
 , "c4" : "13"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "25"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
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
 , "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#55"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00055] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#56"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00056] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00068] For method newFuture arguments Collection&lt;TopicPartition &gt;  topicPartitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.apiName@POLYN175688 the MagicNumber/String  'describeProducers' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#85"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00085] For method buildBatchedRequest arguments int  brokerId|Set&lt;TopicPartition &gt;  topicPartitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#101"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00101] For method handlePartitionError arguments TopicPartition  topicPartition|ApiError  apiError|Map&lt;TopicPartition ,Throwable &gt;  failed|List&lt;TopicPartition &gt;  unmapped"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#101"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00101] For method handlePartitionError list of called methods Object monObjet|org.apache.kafka.clients.admin.DescribeProducersOptions options_brokerIdN176891"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#102"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00102] The argument topicPartition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#103"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00103] The argument apiError is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#104"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00104] The argument failed is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#105"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00105] The argument unmapped is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN176476 the MagicNumber/String  'Not leader error in  DescribeProducers  response for partition {} ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN176476 the MagicNumber/String  'for brokerId {} set in options' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN176476 the MagicNumber/String  'Failed to describe active producers ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN176476 the MagicNumber/String  'for partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN176476 the MagicNumber/String  ' on brokerId ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN176476 the MagicNumber/String  'Not leader error in  DescribeProducers  response for partition {}. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN176476 the MagicNumber/String  'Will retry later.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN176476 the MagicNumber/String  'Unknown topic/partition error in  DescribeProducers  response for partition {}. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN176476 the MagicNumber/String  'Will retry later.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN176476 the MagicNumber/String  'Invalid topic in  DescribeProducers  response for partition {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN176476 the MagicNumber/String  'Failed to fetch metadata for partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN176476 the MagicNumber/String  ' due to invalid topic error: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN176476 the MagicNumber/String  'Authorization failed in  DescribeProducers  response for partition {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN176476 the MagicNumber/String  'Failed to describe ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN176476 the MagicNumber/String  'active producers for partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN176476 the MagicNumber/String  ' due to authorization failure on topic' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN176476 the MagicNumber/String  '  ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN176476 the MagicNumber/String  ' ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN176476 the MagicNumber/String  'Unexpected error in  DescribeProducers  response for partition {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00150] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN176476 the MagicNumber/String  'Failed to describe active ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN176476 the MagicNumber/String  'producers for partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handlePartitionError@POLYN176476 the MagicNumber/String  ' due to unexpected error' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#157"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00157] For method handleResponse arguments Node  broker|Set&lt;TopicPartition &gt;  keys|AbstractResponse  abstractResponse"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00168] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00169] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00172] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00174] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00179] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00181] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00185] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00169] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00172] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00174] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00179] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00181] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00185] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00182"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handleResponse@POLYN179278 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00186"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.clients.admin.internals.DescribeProducersHandler.handleResponse@POLYN179278 the MagicNumber/String  0 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeProducersHandler.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
