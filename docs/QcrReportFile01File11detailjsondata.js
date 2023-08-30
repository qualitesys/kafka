console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java 158 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.FetchSessionHandler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.FetchSessionHandler" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00069"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#69"
 , "c1" : "FetchSessionHandler"
 , "c2" : "FetchSessionHandler(LogContext;int)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00085"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#85"
 , "c1" : "Map&lt;Uuid,String&gt;"
 , "c2" : "sessionTopicNames()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00370"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#370"
 , "c1" : "Builder"
 , "c2" : "newBuilder()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00382"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#382"
 , "c1" : "Builder"
 , "c2" : "newBuilder(int;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00386"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#386"
 , "c1" : "String"
 , "c2" : "topicPartitionsToLogString(Collection&lt;TopicPartition&gt;)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00393"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#393"
 , "c1" : "String"
 , "c2" : "topicIdPartitionsToLogString(Collection&lt;TopicIdPartition&gt;)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00425"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#425"
 , "c1" : "String"
 , "c2" : "verifyFullFetchResponsePartitions(Set&lt;TopicPartition&gt;;Set&lt;Uuid&gt;;short)"
 , "c3" : "6"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00459"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#459"
 , "c1" : "String"
 , "c2" : "verifyIncrementalFetchResponsePartitions(Set&lt;TopicPartition&gt;;Set&lt;Uuid&gt;;short)"
 , "c3" : "5"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00484"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#484"
 , "c1" : "String"
 , "c2" : "responseDataToLogString(Set&lt;TopicPartition&gt;)"
 , "c3" : "6"
 , "c4" : "13"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00521"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#521"
 , "c1" : "boolean"
 , "c2" : "handleResponse(FetchResponse;short)"
 , "c3" : "20"
 , "c4" : "28"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00601"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#601"
 , "c1" : "void"
 , "c2" : "handleError(Throwable)"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "31"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "93"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "9"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#69"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00069] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method org.apache.kafka.clients.FetchSessionHandler.FetchRequestData.toString@POLYN253490 the MagicNumber/String  'FullFetchRequest(toSend=(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.clients.FetchSessionHandler.FetchRequestData.toString@POLYN253490 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method org.apache.kafka.clients.FetchSessionHandler.FetchRequestData.toString@POLYN253490 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00184"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method org.apache.kafka.clients.FetchSessionHandler.FetchRequestData.toString@POLYN253490 the MagicNumber/String  'IncrementalFetchRequest(toSend=(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.clients.FetchSessionHandler.FetchRequestData.toString@POLYN253490 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.clients.FetchSessionHandler.FetchRequestData.toString@POLYN253490 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00191"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.clients.FetchSessionHandler.FetchRequestData.toString@POLYN253490 the MagicNumber/String  '), toForget=(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.clients.FetchSessionHandler.FetchRequestData.toString@POLYN253490 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00196"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method org.apache.kafka.clients.FetchSessionHandler.FetchRequestData.toString@POLYN253490 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00198"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.clients.FetchSessionHandler.FetchRequestData.toString@POLYN253490 the MagicNumber/String  '), toReplace=(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00199"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.clients.FetchSessionHandler.FetchRequestData.toString@POLYN253490 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00203"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method org.apache.kafka.clients.FetchSessionHandler.FetchRequestData.toString@POLYN253490 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00205"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00205] In method org.apache.kafka.clients.FetchSessionHandler.FetchRequestData.toString@POLYN253490 the MagicNumber/String  '), implied=(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00206"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method org.apache.kafka.clients.FetchSessionHandler.FetchRequestData.toString@POLYN253490 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00211"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00211] In method org.apache.kafka.clients.FetchSessionHandler.FetchRequestData.toString@POLYN253490 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00216"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00216] In method org.apache.kafka.clients.FetchSessionHandler.FetchRequestData.toString@POLYN253490 the MagicNumber/String  '), canUseTopicIds=True' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00218"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00218] In method org.apache.kafka.clients.FetchSessionHandler.FetchRequestData.toString@POLYN253490 the MagicNumber/String  '), canUseTopicIds=False' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00220"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#220"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00220] In method org.apache.kafka.clients.FetchSessionHandler.FetchRequestData.toString@POLYN253490 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00247"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#247"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00247] In method org.apache.kafka.clients.FetchSessionHandler.Builder.Builder@POLYN256878 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00259"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#259"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00259] For method add arguments TopicPartition  topicPartition|PartitionData  data"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00259"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#259"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00259] The argument topicPartition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00259"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#259"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00259] The argument data is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00296"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00296] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00297"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#297"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00297] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00298"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#298"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00298] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00299"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#299"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00299] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00329"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#329"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00329] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00330"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#330"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00330] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00270"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#270"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00270] In method org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN258052 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00274"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#274"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00274] In method org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN258052 the MagicNumber/String  'Built full fetch {} for node {} with {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00278"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#278"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00278] In method org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN258052 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00300"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00300] In method org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN258052 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00324"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#324"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00324] In method org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN258052 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00351"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#351"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00351] In method org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN258052 the MagicNumber/String  'Built incremental fetch {} for node {}. Added {}, altered {}, removed {}, ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00352"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#352"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00352] In method org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN258052 the MagicNumber/String  'replaced {} out of {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00360"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#360"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00360] In method org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN258052 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00382"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#382"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00382] For method newBuilder arguments int  size|boolean  copySessionPartitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00386"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#386"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00386] For method topicPartitionsToLogString arguments Collection&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00386"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#386"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00386] The argument partitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00388"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#388"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00388] In method org.apache.kafka.clients.FetchSessionHandler.topicPartitionsToLogString@POLYN264266 the MagicNumber/String  '%d partition(s)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00390"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#390"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00390] In method org.apache.kafka.clients.FetchSessionHandler.topicPartitionsToLogString@POLYN264266 the MagicNumber/String  '(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00390"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#390"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00390] In method org.apache.kafka.clients.FetchSessionHandler.topicPartitionsToLogString@POLYN264266 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00390"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#390"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00390] In method org.apache.kafka.clients.FetchSessionHandler.topicPartitionsToLogString@POLYN264266 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00393"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#393"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00393] For method topicIdPartitionsToLogString arguments Collection&lt;TopicIdPartition &gt;  partitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00393"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#393"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00393] The argument partitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00395"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#395"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00395] In method org.apache.kafka.clients.FetchSessionHandler.topicIdPartitionsToLogString@POLYN264703 the MagicNumber/String  '%d partition(s)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00397"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#397"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00397] In method org.apache.kafka.clients.FetchSessionHandler.topicIdPartitionsToLogString@POLYN264703 the MagicNumber/String  '(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00397"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#397"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00397] In method org.apache.kafka.clients.FetchSessionHandler.topicIdPartitionsToLogString@POLYN264703 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00397"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#397"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00397] In method org.apache.kafka.clients.FetchSessionHandler.topicIdPartitionsToLogString@POLYN264703 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00407"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#407"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00407] The argument toSearch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00425"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#425"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00425] For method verifyFullFetchResponsePartitions arguments Set&lt;TopicPartition &gt;  topicPartitions|Set&lt;Uuid &gt;  ids|short  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00432"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#432"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00432] In method org.apache.kafka.clients.FetchSessionHandler.verifyFullFetchResponsePartitions@POLYN266158 the MagicNumber/String  13 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00436"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#436"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00436] In method org.apache.kafka.clients.FetchSessionHandler.verifyFullFetchResponsePartitions@POLYN266158 the MagicNumber/String  'omittedPartitions=(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00436"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#436"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00436] In method org.apache.kafka.clients.FetchSessionHandler.verifyFullFetchResponsePartitions@POLYN266158 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00436"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#436"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00436] In method org.apache.kafka.clients.FetchSessionHandler.verifyFullFetchResponsePartitions@POLYN266158 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00439"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#439"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00439] In method org.apache.kafka.clients.FetchSessionHandler.verifyFullFetchResponsePartitions@POLYN266158 the MagicNumber/String  'extraPartitions=(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00439"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#439"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00439] In method org.apache.kafka.clients.FetchSessionHandler.verifyFullFetchResponsePartitions@POLYN266158 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00439"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#439"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00439] In method org.apache.kafka.clients.FetchSessionHandler.verifyFullFetchResponsePartitions@POLYN266158 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00442"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#442"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00442] In method org.apache.kafka.clients.FetchSessionHandler.verifyFullFetchResponsePartitions@POLYN266158 the MagicNumber/String  'extraIds=(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00442"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#442"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00442] In method org.apache.kafka.clients.FetchSessionHandler.verifyFullFetchResponsePartitions@POLYN266158 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00442"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#442"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00442] In method org.apache.kafka.clients.FetchSessionHandler.verifyFullFetchResponsePartitions@POLYN266158 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00445"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#445"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00445] In method org.apache.kafka.clients.FetchSessionHandler.verifyFullFetchResponsePartitions@POLYN266158 the MagicNumber/String  'response=(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00445"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#445"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00445] In method org.apache.kafka.clients.FetchSessionHandler.verifyFullFetchResponsePartitions@POLYN266158 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00445"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#445"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00445] In method org.apache.kafka.clients.FetchSessionHandler.verifyFullFetchResponsePartitions@POLYN266158 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00448"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#448"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00448] In method org.apache.kafka.clients.FetchSessionHandler.verifyFullFetchResponsePartitions@POLYN266158 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00459"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#459"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00459] For method verifyIncrementalFetchResponsePartitions arguments Set&lt;TopicPartition &gt;  topicPartitions|Set&lt;Uuid &gt;  ids|short  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00461"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#461"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00461] In method org.apache.kafka.clients.FetchSessionHandler.verifyIncrementalFetchResponsePartitions@POLYN268688 the MagicNumber/String  13 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00468"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#468"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00468] In method org.apache.kafka.clients.FetchSessionHandler.verifyIncrementalFetchResponsePartitions@POLYN268688 the MagicNumber/String  'extraPartitions=(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00468"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#468"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00468] In method org.apache.kafka.clients.FetchSessionHandler.verifyIncrementalFetchResponsePartitions@POLYN268688 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00468"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#468"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00468] In method org.apache.kafka.clients.FetchSessionHandler.verifyIncrementalFetchResponsePartitions@POLYN268688 the MagicNumber/String  '), ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00470"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#470"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00470] In method org.apache.kafka.clients.FetchSessionHandler.verifyIncrementalFetchResponsePartitions@POLYN268688 the MagicNumber/String  'extraIds=(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00470"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#470"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00470] In method org.apache.kafka.clients.FetchSessionHandler.verifyIncrementalFetchResponsePartitions@POLYN268688 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00470"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#470"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00470] In method org.apache.kafka.clients.FetchSessionHandler.verifyIncrementalFetchResponsePartitions@POLYN268688 the MagicNumber/String  '), ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00472"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#472"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00472] In method org.apache.kafka.clients.FetchSessionHandler.verifyIncrementalFetchResponsePartitions@POLYN268688 the MagicNumber/String  'response=(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00472"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#472"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00472] In method org.apache.kafka.clients.FetchSessionHandler.verifyIncrementalFetchResponsePartitions@POLYN268688 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00472"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#472"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00472] In method org.apache.kafka.clients.FetchSessionHandler.verifyIncrementalFetchResponsePartitions@POLYN268688 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00475"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#475"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00475] In method org.apache.kafka.clients.FetchSessionHandler.verifyIncrementalFetchResponsePartitions@POLYN268688 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00484"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#484"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00484] For method responseDataToLogString arguments Set&lt;TopicPartition &gt;  topicPartitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00484"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#484"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00484] For method responseDataToLogString list of called methods Object monObjet|int sessionPartitions_sizeN270744"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00484"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#484"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00484] The argument topicPartitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00487"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#487"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00487] In method org.apache.kafka.clients.FetchSessionHandler.responseDataToLogString@POLYN270546 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00488"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#488"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00488] In method org.apache.kafka.clients.FetchSessionHandler.responseDataToLogString@POLYN270546 the MagicNumber/String  ' with %d response partition(s), %d implied partition(s)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00491"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#491"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00491] In method org.apache.kafka.clients.FetchSessionHandler.responseDataToLogString@POLYN270546 the MagicNumber/String  ' with %d response partition(s)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00496"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#496"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00496] In method org.apache.kafka.clients.FetchSessionHandler.responseDataToLogString@POLYN270546 the MagicNumber/String  ' with response=(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00497"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#497"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00497] In method org.apache.kafka.clients.FetchSessionHandler.responseDataToLogString@POLYN270546 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00498"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#498"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00498] In method org.apache.kafka.clients.FetchSessionHandler.responseDataToLogString@POLYN270546 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00499"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#499"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00499] In method org.apache.kafka.clients.FetchSessionHandler.responseDataToLogString@POLYN270546 the MagicNumber/String  ', implied=(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00500"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#500"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00500] In method org.apache.kafka.clients.FetchSessionHandler.responseDataToLogString@POLYN270546 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00505"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#505"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00505] In method org.apache.kafka.clients.FetchSessionHandler.responseDataToLogString@POLYN270546 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00506"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#506"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00506] In method org.apache.kafka.clients.FetchSessionHandler.responseDataToLogString@POLYN270546 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00521"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#521"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00521] For method handleResponse arguments FetchResponse  response|short  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00521"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#521"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00521] For method handleResponse list of called methods Object monObjet|org.apache.kafka.common.requests.FetchMetadata nextMetadata_nextCloseExistingN272920|java.lang.String verifyFullFetchResponsePartitionsN273734|org.apache.kafka.common.requests.FetchMetadata FetchMetadata_newIncrementalN274847|java.lang.String verifyIncrementalFetchResponsePartitionsN275020|org.apache.kafka.common.requests.FetchMetadata nextMetadata_nextCloseExistingN275359|org.apache.kafka.common.requests.FetchMetadata nextMetadata_nextIncrementalN276229"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00521"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#521"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00521] The argument response is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00523"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#523"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00523] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String  'Node {} was unable to process the fetch request with {}: {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00530"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#530"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00530] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00534"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#534"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00534] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00542"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#542"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00542] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String  'Node {} sent a empty full fetch response to indicate that this ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00543"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#543"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00543] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String  'client should be throttled for {} ms.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00546"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#546"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00546] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00549"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#549"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00549] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00550"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#550"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00550] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String  'Node {} sent an invalid full fetch response with {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00552"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#552"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00552] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00555"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#555"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00555] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String  'Node {} sent a full fetch response{}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00557"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#557"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00557] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00561"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#561"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00561] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String  'Node {} sent a full fetch response that created a new incremental ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00562"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#562"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00562] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String  'fetch session {}{}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00564"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#564"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00564] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00568"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#568"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00568] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00569"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#569"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00569] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String  'Node {} sent an invalid incremental fetch response with {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00571"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#571"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00571] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00575"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#575"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00575] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String  'Node {} sent an incremental fetch response closing session {}{}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00578"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#578"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00578] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00584"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#584"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00584] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String  'Node {} sent an incremental fetch response with throttleTimeMs = {} ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00585"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#585"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00585] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String  'for session {}{}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00588"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#588"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00588] In method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00601"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#601"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00601] For method handleError arguments Throwable  t"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00601"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#601"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00601] For method handleError list of called methods Object monObjet|org.apache.kafka.common.requests.FetchMetadata nextMetadata_nextCloseExistingN276713"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00602"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#602"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00602] In method org.apache.kafka.clients.FetchSessionHandler.handleError@POLYN276482 the MagicNumber/String  'Error sending fetch request {} to node {}:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#85"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00085] Public method sessionTopicNames is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00370"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#370"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00370] Public method newBuilder is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00382"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#382"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00382] Public method newBuilder is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN258052"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.FetchSessionHandler.handleError@POLYN276482"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.FetchSessionHandler.newBuilder@POLYN263732"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.FetchSessionHandler.newBuilder@POLYN264073"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00523"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#523"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00523] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String 'Node {} was unable to process the fetch request with {}: {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00530"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#530"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00530] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00534"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#534"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00534] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00542"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#542"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00542] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String 'Node {} sent a empty full fetch response to indicate that this ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00543"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#543"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00543] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String 'client should be throttled for {} ms.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00546"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#546"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00546] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00549"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#549"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00549] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00550"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#550"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00550] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String 'Node {} sent an invalid full fetch response with {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00552"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#552"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00552] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00555"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#555"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00555] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String 'Node {} sent a full fetch response{}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00557"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#557"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00557] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00561"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#561"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00561] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String 'Node {} sent a full fetch response that created a new incremental ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00562"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#562"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00562] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String 'fetch session {}{}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00564"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#564"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00564] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00568"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#568"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00568] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00569"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#569"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00569] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String 'Node {} sent an invalid incremental fetch response with {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00571"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#571"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00571] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00575"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#575"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00575] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String 'Node {} sent an incremental fetch response closing session {}{}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00578"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#578"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00578] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00584"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#584"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00584] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String 'Node {} sent an incremental fetch response with throttleTimeMs = {} ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00585"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#585"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00585] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String 'for session {}{}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00588"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#588"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00588] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleResponse@POLYN272361 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00270"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#270"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00270] In the recursive method org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN258052 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00274"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#274"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00274] In the recursive method org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN258052 the MagicNumber/String 'Built full fetch {} for node {} with {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00278"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#278"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00278] In the recursive method org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN258052 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00300"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#300"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00300] In the recursive method org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN258052 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00324"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#324"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00324] In the recursive method org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN258052 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00351"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#351"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00351] In the recursive method org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN258052 the MagicNumber/String 'Built incremental fetch {} for node {}. Added {}, altered {}, removed {}, ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00352"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#352"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00352] In the recursive method org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN258052 the MagicNumber/String 'replaced {} out of {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00360"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#360"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00360] In the recursive method org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN258052 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00602"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.html#602"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00602] In the recursive method org.apache.kafka.clients.FetchSessionHandler.handleError@POLYN276482 the MagicNumber/String 'Error sending fetch request {} to node {}:' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/FetchSessionHandler.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
