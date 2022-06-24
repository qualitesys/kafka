console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java 149 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.FetchSessionHandler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.FetchSessionHandler" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "FetchSessionHandler"
 , "c2" : "FetchSessionHandler(LogContext;int)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Map<Uuid,String>"
 , "c2" : "sessionTopicNames()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Builder"
 , "c2" : "newBuilder()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Builder"
 , "c2" : "newBuilder(int;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "topicPartitionsToLogString(Collection<TopicPartition>)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "topicIdPartitionsToLogString(Collection<TopicIdPartition>)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "verifyFullFetchResponsePartitions(Set<TopicPartition>;Set<Uuid>;short)"
 , "c3" : "6"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "verifyIncrementalFetchResponsePartitions(Set<TopicPartition>;Set<Uuid>;short)"
 , "c3" : "5"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "responseDataToLogString(Set<TopicPartition>)"
 , "c3" : "6"
 , "c4" : "13"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "handleResponse(FetchResponse;short)"
 , "c3" : "20"
 , "c4" : "28"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleError(Throwable)"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.svg" }

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
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "23"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "8"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "93"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "9"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00032] The class FetchSessionHandler contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#40"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00040] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00056] The class FetchRequestData contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.clients.FetchSessionHandler.FetchRequestData.toString@POLYN255014 the MagicNumber/String  'FullFetchRequest(toSend=(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.clients.FetchSessionHandler.FetchRequestData.toString@POLYN255014 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.clients.FetchSessionHandler.FetchRequestData.toString@POLYN255014 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.clients.FetchSessionHandler.FetchRequestData.toString@POLYN255014 the MagicNumber/String  'IncrementalFetchRequest(toSend=(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.clients.FetchSessionHandler.FetchRequestData.toString@POLYN255014 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.clients.FetchSessionHandler.FetchRequestData.toString@POLYN255014 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.clients.FetchSessionHandler.FetchRequestData.toString@POLYN255014 the MagicNumber/String  '), toForget=(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.clients.FetchSessionHandler.FetchRequestData.toString@POLYN255014 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.clients.FetchSessionHandler.FetchRequestData.toString@POLYN255014 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.clients.FetchSessionHandler.FetchRequestData.toString@POLYN255014 the MagicNumber/String  '), toReplace=(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.clients.FetchSessionHandler.FetchRequestData.toString@POLYN255014 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.clients.FetchSessionHandler.FetchRequestData.toString@POLYN255014 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00150"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00150] In method org.apache.kafka.clients.FetchSessionHandler.FetchRequestData.toString@POLYN255014 the MagicNumber/String  '), implied=(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.clients.FetchSessionHandler.FetchRequestData.toString@POLYN255014 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.clients.FetchSessionHandler.FetchRequestData.toString@POLYN255014 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.clients.FetchSessionHandler.FetchRequestData.toString@POLYN255014 the MagicNumber/String  '), canUseTopicIds=True' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method org.apache.kafka.clients.FetchSessionHandler.FetchRequestData.toString@POLYN255014 the MagicNumber/String  '), canUseTopicIds=False' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method org.apache.kafka.clients.FetchSessionHandler.FetchRequestData.toString@POLYN255014 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00170] The class Builder contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.clients.FetchSessionHandler.Builder.Builder@POLYN258396 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#190"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00190] For method add arguments TopicPartition  topicPartition|PartitionData  data"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#190"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00190] The argument topicPartition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#190"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00190] The argument data is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00227"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#227"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00227] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00228"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#228"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00228] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00229"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00229] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00230"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00230] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00260"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#260"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00260] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00261"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#261"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00261] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00201"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN259570 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00205"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00205] In method org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN259570 the MagicNumber/String  'Built full fetch {} for node {} with {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00209"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#209"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00209] In method org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN259570 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00231"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00231] In method org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN259570 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00255"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00255] In method org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN259570 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00282"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#282"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00282] In method org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN259570 the MagicNumber/String  'Built incremental fetch {} for node {}. Added {}, altered {}, removed {}, ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00283"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#283"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00283] In method org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN259570 the MagicNumber/String  'replaced {} out of {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00291"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#291"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00291] In method org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN259570 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00307"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#307"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00307] For method newBuilder arguments int  size|boolean  copySessionPartitions"
}} 
,
{ "ligne" : {
   "c1" : "00311"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#311"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00311] For method topicPartitionsToLogString arguments Collection&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {
   "c1" : "00311"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#311"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00311] The argument partitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00313"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#313"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00313] In method org.apache.kafka.clients.FetchSessionHandler.topicPartitionsToLogString@POLYN265756 the MagicNumber/String  '%d partition(s)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00315"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#315"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00315] In method org.apache.kafka.clients.FetchSessionHandler.topicPartitionsToLogString@POLYN265756 the MagicNumber/String  '(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00315"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#315"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00315] In method org.apache.kafka.clients.FetchSessionHandler.topicPartitionsToLogString@POLYN265756 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00315"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#315"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00315] In method org.apache.kafka.clients.FetchSessionHandler.topicPartitionsToLogString@POLYN265756 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00318"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#318"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00318] For method topicIdPartitionsToLogString arguments Collection&lt;TopicIdPartition &gt;  partitions"
}} 
,
{ "ligne" : {
   "c1" : "00318"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#318"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00318] The argument partitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00320"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#320"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00320] In method org.apache.kafka.clients.FetchSessionHandler.topicIdPartitionsToLogString@POLYN266193 the MagicNumber/String  '%d partition(s)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00322"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#322"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00322] In method org.apache.kafka.clients.FetchSessionHandler.topicIdPartitionsToLogString@POLYN266193 the MagicNumber/String  '(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00322"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#322"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00322] In method org.apache.kafka.clients.FetchSessionHandler.topicIdPartitionsToLogString@POLYN266193 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00322"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#322"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00322] In method org.apache.kafka.clients.FetchSessionHandler.topicIdPartitionsToLogString@POLYN266193 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00326"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#326"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00326] The argument toSearch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00337"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#337"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00337] For method verifyFullFetchResponsePartitions arguments Set&lt;TopicPartition &gt;  topicPartitions|Set&lt;Uuid &gt;  ids|short  version"
}} 
,
{ "ligne" : {
   "c1" : "00344"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#344"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00344] In method org.apache.kafka.clients.FetchSessionHandler.verifyFullFetchResponsePartitions@POLYN267646 the MagicNumber/String  13 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00348"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#348"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00348] In method org.apache.kafka.clients.FetchSessionHandler.verifyFullFetchResponsePartitions@POLYN267646 the MagicNumber/String  'omittedPartitions=(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00348"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#348"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00348] In method org.apache.kafka.clients.FetchSessionHandler.verifyFullFetchResponsePartitions@POLYN267646 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00348"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#348"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00348] In method org.apache.kafka.clients.FetchSessionHandler.verifyFullFetchResponsePartitions@POLYN267646 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00351"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#351"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00351] In method org.apache.kafka.clients.FetchSessionHandler.verifyFullFetchResponsePartitions@POLYN267646 the MagicNumber/String  'extraPartitions=(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00351"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#351"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00351] In method org.apache.kafka.clients.FetchSessionHandler.verifyFullFetchResponsePartitions@POLYN267646 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00351"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#351"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00351] In method org.apache.kafka.clients.FetchSessionHandler.verifyFullFetchResponsePartitions@POLYN267646 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00354"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#354"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00354] In method org.apache.kafka.clients.FetchSessionHandler.verifyFullFetchResponsePartitions@POLYN267646 the MagicNumber/String  'extraIds=(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00354"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#354"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00354] In method org.apache.kafka.clients.FetchSessionHandler.verifyFullFetchResponsePartitions@POLYN267646 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00354"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#354"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00354] In method org.apache.kafka.clients.FetchSessionHandler.verifyFullFetchResponsePartitions@POLYN267646 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00357"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#357"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00357] In method org.apache.kafka.clients.FetchSessionHandler.verifyFullFetchResponsePartitions@POLYN267646 the MagicNumber/String  'response=(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00357"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#357"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00357] In method org.apache.kafka.clients.FetchSessionHandler.verifyFullFetchResponsePartitions@POLYN267646 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00357"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#357"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00357] In method org.apache.kafka.clients.FetchSessionHandler.verifyFullFetchResponsePartitions@POLYN267646 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00360"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#360"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00360] In method org.apache.kafka.clients.FetchSessionHandler.verifyFullFetchResponsePartitions@POLYN267646 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00364"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#364"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00364] For method verifyIncrementalFetchResponsePartitions arguments Set&lt;TopicPartition &gt;  topicPartitions|Set&lt;Uuid &gt;  ids|short  version"
}} 
,
{ "ligne" : {
   "c1" : "00366"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#366"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00366] In method org.apache.kafka.clients.FetchSessionHandler.verifyIncrementalFetchResponsePartitions@POLYN270168 the MagicNumber/String  13 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00373"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#373"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00373] In method org.apache.kafka.clients.FetchSessionHandler.verifyIncrementalFetchResponsePartitions@POLYN270168 the MagicNumber/String  'extraPartitions=(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00373"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#373"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00373] In method org.apache.kafka.clients.FetchSessionHandler.verifyIncrementalFetchResponsePartitions@POLYN270168 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00373"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#373"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00373] In method org.apache.kafka.clients.FetchSessionHandler.verifyIncrementalFetchResponsePartitions@POLYN270168 the MagicNumber/String  '), ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00375"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#375"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00375] In method org.apache.kafka.clients.FetchSessionHandler.verifyIncrementalFetchResponsePartitions@POLYN270168 the MagicNumber/String  'extraIds=(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00375"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#375"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00375] In method org.apache.kafka.clients.FetchSessionHandler.verifyIncrementalFetchResponsePartitions@POLYN270168 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00375"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#375"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00375] In method org.apache.kafka.clients.FetchSessionHandler.verifyIncrementalFetchResponsePartitions@POLYN270168 the MagicNumber/String  '), ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00377"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#377"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00377] In method org.apache.kafka.clients.FetchSessionHandler.verifyIncrementalFetchResponsePartitions@POLYN270168 the MagicNumber/String  'response=(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00377"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#377"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00377] In method org.apache.kafka.clients.FetchSessionHandler.verifyIncrementalFetchResponsePartitions@POLYN270168 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00377"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#377"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00377] In method org.apache.kafka.clients.FetchSessionHandler.verifyIncrementalFetchResponsePartitions@POLYN270168 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00380"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#380"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00380] In method org.apache.kafka.clients.FetchSessionHandler.verifyIncrementalFetchResponsePartitions@POLYN270168 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00384"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#384"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00384] For method responseDataToLogString arguments Set&lt;TopicPartition &gt;  topicPartitions"
}} 
,
{ "ligne" : {
   "c1" : "00384"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#384"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00384] The argument topicPartitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00387"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#387"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00387] In method org.apache.kafka.clients.FetchSessionHandler.responseDataToLogString@POLYN272020 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00388"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#388"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00388] In method org.apache.kafka.clients.FetchSessionHandler.responseDataToLogString@POLYN272020 the MagicNumber/String  ' with %d response partition(s), %d implied partition(s)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00391"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#391"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00391] In method org.apache.kafka.clients.FetchSessionHandler.responseDataToLogString@POLYN272020 the MagicNumber/String  ' with %d response partition(s)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00396"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#396"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00396] In method org.apache.kafka.clients.FetchSessionHandler.responseDataToLogString@POLYN272020 the MagicNumber/String  ' with response=(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00397"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#397"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00397] In method org.apache.kafka.clients.FetchSessionHandler.responseDataToLogString@POLYN272020 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00398"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#398"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00398] In method org.apache.kafka.clients.FetchSessionHandler.responseDataToLogString@POLYN272020 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00399"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#399"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00399] In method org.apache.kafka.clients.FetchSessionHandler.responseDataToLogString@POLYN272020 the MagicNumber/String  ', implied=(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00400"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#400"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00400] In method org.apache.kafka.clients.FetchSessionHandler.responseDataToLogString@POLYN272020 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00405"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#405"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00405] In method org.apache.kafka.clients.FetchSessionHandler.responseDataToLogString@POLYN272020 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00406"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#406"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00406] In method org.apache.kafka.clients.FetchSessionHandler.responseDataToLogString@POLYN272020 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00414"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#414"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00414] For method handleResponse arguments FetchResponse  response|short  version"
}} 
,
{ "ligne" : {
   "c1" : "00414"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#414"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00414] For method handleResponse list of called methods Object monObjet|org.apache.kafka.common.requests.FetchMetadata nextMetadata_nextCloseExistingN274386|java.util.LinkedHashMap&lt;org.apache.kafka.common.TopicPartition,FetchResponseData.PartitionData&gt; response_responseDataN274523|String verifyFullFetchResponsePartitionsN275196|org.apache.kafka.common.requests.FetchMetadata FetchMetadata_newIncrementalN276309|String verifyIncrementalFetchResponsePartitionsN276480|org.apache.kafka.common.requests.FetchMetadata nextMetadata_nextCloseExistingN276819|org.apache.kafka.common.requests.FetchMetadata nextMetadata_nextIncrementalN277689"
}} 
,
{ "ligne" : {
   "c1" : "00414"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#414"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00414] The argument response is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00416"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#416"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00416] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String  'Node {} was unable to process the fetch request with {}: {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00423"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#423"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00423] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00427"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#427"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00427] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00435"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#435"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00435] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String  'Node {} sent a empty full fetch response to indicate that this ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00436"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#436"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00436] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String  'client should be throttled for {} ms.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00439"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#439"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00439] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00442"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#442"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00442] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00443"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#443"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00443] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String  'Node {} sent an invalid full fetch response with {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00445"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#445"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00445] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00448"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#448"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00448] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String  'Node {} sent a full fetch response{}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00450"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#450"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00450] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00454"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#454"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00454] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String  'Node {} sent a full fetch response that created a new incremental ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00455"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#455"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00455] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String  'fetch session {}{}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00457"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#457"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00457] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00461"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#461"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00461] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00462"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#462"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00462] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String  'Node {} sent an invalid incremental fetch response with {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00464"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#464"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00464] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00468"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#468"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00468] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String  'Node {} sent an incremental fetch response closing session {}{}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00471"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#471"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00471] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00477"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#477"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00477] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String  'Node {} sent an incremental fetch response with throttleTimeMs = {} ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00478"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#478"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00478] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String  'for session {}{}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00481"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#481"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00481] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00487"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#487"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00487] For method handleError arguments Throwable  t"
}} 
,
{ "ligne" : {
   "c1" : "00487"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#487"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00487] For method handleError list of called methods Object monObjet|org.apache.kafka.common.requests.FetchMetadata nextMetadata_nextCloseExistingN278173"
}} 
,
{ "ligne" : {
   "c1" : "00488"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#488"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00488] In method org.apache.kafka.clients.FetchSessionHandler.handleError@POLYN277942 the MagicNumber/String  'Error sending fetch request {} to node {}:' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#52"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00052] Public method sessionTopicNames is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00301"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#301"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00301] Public method newBuilder is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00307"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#307"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00307] Public method newBuilder is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.FetchSessionHandler.handleError@POLYN277942"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827"
}} 
,
{ "ligne" : {
   "c1" : "00488"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#488"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00488] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleError@POLYN277942 the MagicNumber/String 'Error sending fetch request {} to node {}:' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00416"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#416"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00416] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String 'Node {} was unable to process the fetch request with {}: {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00423"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#423"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00423] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00427"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#427"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00427] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00435"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#435"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00435] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String 'Node {} sent a empty full fetch response to indicate that this ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00436"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#436"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00436] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String 'client should be throttled for {} ms.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00439"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#439"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00439] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00442"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#442"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00442] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00443"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#443"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00443] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String 'Node {} sent an invalid full fetch response with {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00445"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#445"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00445] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00448"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#448"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00448] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String 'Node {} sent a full fetch response{}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00450"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#450"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00450] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00454"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#454"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00454] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String 'Node {} sent a full fetch response that created a new incremental ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00455"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#455"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00455] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String 'fetch session {}{}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00457"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#457"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00457] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00461"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#461"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00461] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00462"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#462"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00462] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String 'Node {} sent an invalid incremental fetch response with {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00464"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#464"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00464] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00468"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#468"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00468] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String 'Node {} sent an incremental fetch response closing session {}{}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00471"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#471"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00471] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00477"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#477"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00477] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String 'Node {} sent an incremental fetch response with throttleTimeMs = {} ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00478"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#478"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00478] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String 'for session {}{}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00481"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#481"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00481] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN273827 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
