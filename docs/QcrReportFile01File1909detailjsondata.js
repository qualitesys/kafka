console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java 20 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.processor.internals.RecordDeserializer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.RecordDeserializer" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00038"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#38"
 , "c1" : "RecordDeserializer"
 , "c2" : "RecordDeserializer(SourceNode&lt;?,?&gt;;DeserializationExceptionHandler;LogContext;Sensor)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00053"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#53"
 , "c1" : "ConsumerRecord&lt;Object,Object&gt;"
 , "c2" : "deserialize(ProcessorContext&lt;?,?&gt;;ConsumerRecord&lt;byte[],byte[]&gt;)"
 , "c3" : "3"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00105"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#105"
 , "c1" : "SourceNode&lt;?,?&gt;"
 , "c2" : "sourceNode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.svg" }

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
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#40"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00040] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00053] For method deserialize arguments ProcessorContext&lt;? ,? &gt;  processorContext|ConsumerRecord&lt;byte[] ,byte[] &gt;  rawRecord"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#54"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00054] The argument rawRecord is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.streams.processor.internals.RecordDeserializer.deserialize@POLYN164092 the MagicNumber/String  'Deserialization error callback failed after deserialization error for record {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.streams.processor.internals.RecordDeserializer.deserialize@POLYN164092 the MagicNumber/String  'Fatal user code error in deserialization error callback' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.streams.processor.internals.RecordDeserializer.deserialize@POLYN164092 the MagicNumber/String  'Deserialization exception handler is set to fail upon' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.streams.processor.internals.RecordDeserializer.deserialize@POLYN164092 the MagicNumber/String  ' a deserialization error. If you would rather have the streaming pipeline' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.streams.processor.internals.RecordDeserializer.deserialize@POLYN164092 the MagicNumber/String  ' continue after a deserialization error, please set the ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.streams.processor.internals.RecordDeserializer.deserialize@POLYN164092 the MagicNumber/String  ' appropriately.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.streams.processor.internals.RecordDeserializer.deserialize@POLYN164092 the MagicNumber/String  'Skipping record due to deserialization error. topic=[{}] partition=[{}] offset=[{}]' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.streams.processor.internals.RecordDeserializer.deserialize@POLYN164092 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.RecordDeserializer.deserialize@POLYN164092"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#79"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00079] In the recursive method org.apache.kafka.streams.processor.internals.RecordDeserializer.deserialize@POLYN164092 the MagicNumber/String 'Deserialization error callback failed after deserialization error for record {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#82"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00082] In the recursive method org.apache.kafka.streams.processor.internals.RecordDeserializer.deserialize@POLYN164092 the MagicNumber/String 'Fatal user code error in deserialization error callback' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#86"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00086] In the recursive method org.apache.kafka.streams.processor.internals.RecordDeserializer.deserialize@POLYN164092 the MagicNumber/String 'Deserialization exception handler is set to fail upon' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#87"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00087] In the recursive method org.apache.kafka.streams.processor.internals.RecordDeserializer.deserialize@POLYN164092 the MagicNumber/String ' a deserialization error. If you would rather have the streaming pipeline' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#88"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00088] In the recursive method org.apache.kafka.streams.processor.internals.RecordDeserializer.deserialize@POLYN164092 the MagicNumber/String ' continue after a deserialization error, please set the ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#89"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00089] In the recursive method org.apache.kafka.streams.processor.internals.RecordDeserializer.deserialize@POLYN164092 the MagicNumber/String ' appropriately.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#93"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00093] In the recursive method org.apache.kafka.streams.processor.internals.RecordDeserializer.deserialize@POLYN164092 the MagicNumber/String 'Skipping record due to deserialization error. topic=[{}] partition=[{}] offset=[{}]' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#100"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00100] In the recursive method org.apache.kafka.streams.processor.internals.RecordDeserializer.deserialize@POLYN164092 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
