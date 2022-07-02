console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html" 
 , "texte" : "File streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java 44 rule violations " 
 , "fic2"  : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.TestInputTopic"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.TestInputTopic" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "TestInputTopic"
 , "c2" : "TestInputTopic(TopologyTestDriver;String;Serializer<K>;Serializer<V>;Instant;Duration)"
 , "c3" : "2"
 , "c4" : "13"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "advanceTime(Duration)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Instant"
 , "c2" : "getTimestampAndAdvance()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "pipeInput(TestRecord<K,V>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "pipeInput(V)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "pipeInput(K;V)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "pipeInput(V;Instant)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "pipeInput(K;V;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "pipeInput(K;V;Instant)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "pipeRecordList(List<?extendsTestRecord<K,V>>)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "pipeKeyValueList(List<KeyValue<K,V>>)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "pipeValueList(List<V>)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "pipeKeyValueList(List<KeyValue<K,V>>;Instant;Duration)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "pipeValueList(List<V>;Instant;Duration)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.png" 

 , "ligneplantuml" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.svg" }

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
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "10"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
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
 , "c4" : "18"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "12"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00015"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00015] The class TestInputTopic contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#30"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00030] The argument autoAdvance is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method org.apache.kafka.streams.TestInputTopic.TestInputTopic@POLYN205893 the MagicNumber/String  'TopologyTestDriver cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method org.apache.kafka.streams.TestInputTopic.TestInputTopic@POLYN205893 the MagicNumber/String  'topicName cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method org.apache.kafka.streams.TestInputTopic.TestInputTopic@POLYN205893 the MagicNumber/String  'keySerializer cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.streams.TestInputTopic.TestInputTopic@POLYN205893 the MagicNumber/String  'valueSerializer cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.streams.TestInputTopic.TestInputTopic@POLYN205893 the MagicNumber/String  'startTimestamp cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.streams.TestInputTopic.TestInputTopic@POLYN205893 the MagicNumber/String  'autoAdvance cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.streams.TestInputTopic.TestInputTopic@POLYN205893 the MagicNumber/String  'autoAdvance must be positive' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#49"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00049] For method advanceTime arguments Duration  advance"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#49"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00049] The argument advance is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.streams.TestInputTopic.advanceTime@POLYN207599 the MagicNumber/String  'advance must be positive' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00063] For method pipeInput arguments TestRecord&lt;K ,V &gt;  record"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#63"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00063] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.streams.TestInputTopic.pipeInput@POLYN208270 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00070] For method pipeInput arguments V  value"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method pipeInput arguments K  key|V  value"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00081] For method pipeInput arguments V  value|Instant  timestamp"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.streams.TestInputTopic.pipeInput@POLYN209576 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#87"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00087] For method pipeInput arguments K  key|V  value|long  timestampMs"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.streams.TestInputTopic.pipeInput@POLYN210018 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#94"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00094] For method pipeInput arguments K  key|V  value|Instant  timestamp"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#101"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00101] For method pipeRecordList arguments List&lt;?  extends TestRecord&lt;K ,V &gt; &gt;  records"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#108"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00108] For method pipeKeyValueList arguments List&lt;KeyValue&lt;K ,V &gt; &gt;  keyValues"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#115"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00115] For method pipeValueList arguments List&lt;V &gt;  values"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#122"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00122] For method pipeKeyValueList arguments List&lt;KeyValue&lt;K ,V &gt; &gt;  keyValues|Instant  startTimestamp|Duration  advance"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#133"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00133] For method pipeValueList arguments List&lt;V &gt;  values|Instant  startTimestamp|Duration  advance"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.streams.TestInputTopic.toString@POLYN213979 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.streams.TestInputTopic.toString@POLYN213979 the MagicNumber/String  '[' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.streams.TestInputTopic.toString@POLYN213979 the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.streams.TestInputTopic.toString@POLYN213979 the MagicNumber/String  'topic='' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.streams.TestInputTopic.toString@POLYN213979 the MagicNumber/String  ''' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.streams.TestInputTopic.toString@POLYN213979 the MagicNumber/String  'keySerializer=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.streams.TestInputTopic.toString@POLYN213979 the MagicNumber/String  'valueSerializer=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#70"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00070] Public method pipeInput is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#75"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00075] Public method pipeInput is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#81"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00081] Public method pipeInput is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#87"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00087] Public method pipeInput is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#94"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00094] Public method pipeInput is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#101"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00101] Public method pipeRecordList is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#108"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00108] Public method pipeKeyValueList is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#115"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00115] Public method pipeValueList is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#122"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00122] Public method pipeKeyValueList is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TestInputTopic.java.html#133"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00133] Public method pipeValueList is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
