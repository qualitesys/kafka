console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java 55 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
]
, 
"data02" : [
]
, 
"data03" : [
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
 , "c4" : "13"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "19"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "15"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#54"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00054] For method responseData arguments Map&lt;Uuid ,String &gt;  topicNames|short  version"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#54"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00054] The argument topicNames is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#56"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00056] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.common.requests.FetchResponse.responseData@POLYN208371 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.common.requests.FetchResponse.responseData@POLYN208371 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.common.requests.FetchResponse.responseData@POLYN208371 the MagicNumber/String  13 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.common.requests.FetchResponse.responseData@POLYN208371 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#101"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00101] For method parse arguments ByteBuffer  buffer|short  version"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#112"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00112] For method sizeOf arguments short  version|Iterator&lt;Map.Entry&lt;TopicIdPartition ,FetchResponseData.PartitionData &gt; &gt;  partIterator"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.common.requests.FetchResponse.sizeOf@POLYN211342 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.common.requests.FetchResponse.sizeOf@POLYN211342 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#123"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00123] For method shouldClientThrottle arguments short  version"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.common.requests.FetchResponse.shouldClientThrottle@POLYN211884 the MagicNumber/String  8 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#127"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00127] For method divergingEpoch arguments FetchResponseData.PartitionData  partitionResponse"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#127"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00127] The argument partitionResponse is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00128] The same method call Optional.empty()Optional.of(partitionResponse.divergingEpoch()) is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.common.requests.FetchResponse.divergingEpoch@POLYN212050 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#132"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00132] For method isDivergingEpoch arguments FetchResponseData.PartitionData  partitionResponse"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#132"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00132] The argument partitionResponse is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.common.requests.FetchResponse.isDivergingEpoch@POLYN212358 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#136"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00136] For method preferredReadReplica arguments FetchResponseData.PartitionData  partitionResponse"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#136"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00136] The argument partitionResponse is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00137] The same method call Optional.empty()Optional.of(partitionResponse.preferredReadReplica()) is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#141"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00141] For method isPreferredReplica arguments FetchResponseData.PartitionData  partitionResponse"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#141"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00141] The argument partitionResponse is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#145"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00145] For method partitionResponse arguments TopicIdPartition  topicIdPartition|Errors  error"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#145"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00145] The argument topicIdPartition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#149"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00149] For method partitionResponse arguments int  partition|Errors  error"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#149"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00149] The argument error is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#157"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00157] For method recordsOrFail arguments FetchResponseData.PartitionData  partition"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#157"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00157] The argument partition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.common.requests.FetchResponse.recordsOrFail@POLYN213938 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00160"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method org.apache.kafka.common.requests.FetchResponse.recordsOrFail@POLYN213938 the MagicNumber/String  'The record type is ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00160"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method org.apache.kafka.common.requests.FetchResponse.recordsOrFail@POLYN213938 the MagicNumber/String  ', which is not a subtype of ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.common.requests.FetchResponse.recordsOrFail@POLYN213938 the MagicNumber/String  '. This method is only safe to call if the `FetchResponse` was deserialized from bytes.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#165"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00165] For method recordsSize arguments FetchResponseData.PartitionData  partition"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#165"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00165] The argument partition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00166"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00166] The same method call partition.records() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00166"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method org.apache.kafka.common.requests.FetchResponse.recordsSize@POLYN214625 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00166"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method org.apache.kafka.common.requests.FetchResponse.recordsSize@POLYN214625 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#170"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00170] For method of arguments Errors  error|int  throttleTimeMs|int  sessionId|LinkedHashMap&lt;TopicIdPartition ,FetchResponseData.PartitionData &gt;  responseData"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#173"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00173] The argument responseData is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#177"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00177] For method matchingTopic arguments FetchResponseData.FetchableTopicResponse  previousTopic|TopicIdPartition  currentTopic"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#177"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00177] The argument currentTopic is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.common.requests.FetchResponse.matchingTopic@POLYN215284 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00179"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method org.apache.kafka.common.requests.FetchResponse.matchingTopic@POLYN215284 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#187"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00187] For method toMessage arguments Errors  error|int  throttleTimeMs|int  sessionId|Iterator&lt;Map.Entry&lt;TopicIdPartition ,FetchResponseData.PartitionData &gt; &gt;  partIterator"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#187"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00187] The argument error is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#190"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00190] The argument partIterator is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00193] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00194"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00194] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00199] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00204"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00204] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.common.requests.FetchResponse.toMessage@POLYN215845 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchResponse.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.common.requests.FetchResponse.toMessage@POLYN215845 the MagicNumber/String  1 should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
