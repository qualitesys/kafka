console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java 21 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.xml" 
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
 , "c5" : "00023"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#23"
 , "c1" : "RecordDeserializer"
 , "c2" : "RecordDeserializer(SourceNode<?,?>;DeserializationExceptionHandler;LogContext;Sensor)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00034"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#34"
 , "c1" : "ConsumerRecord<Object,Object>"
 , "c2" : "deserialize(ProcessorContext<?,?>;ConsumerRecord<byte[],byte[]>)"
 , "c3" : "3"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00086"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#86"
 , "c1" : "SourceNode<?,?>"
 , "c2" : "sourceNode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.svg" }

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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
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
 , "c1" : "00017"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#17"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00017] The class RecordDeserializer contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#25"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00025] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#34"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00034] For method deserialize arguments ProcessorContext&lt;? ,? &gt;  processorContext|ConsumerRecord&lt;byte[] ,byte[] &gt;  rawRecord"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#35"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00035] The argument rawRecord is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.streams.processor.internals.RecordDeserializer.deserialize@POLYN154314 the MagicNumber/String  'Deserialization error callback failed after deserialization error for record {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.streams.processor.internals.RecordDeserializer.deserialize@POLYN154314 the MagicNumber/String  'Fatal user code error in deserialization error callback' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.streams.processor.internals.RecordDeserializer.deserialize@POLYN154314 the MagicNumber/String  'Deserialization exception handler is set to fail upon' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.streams.processor.internals.RecordDeserializer.deserialize@POLYN154314 the MagicNumber/String  ' a deserialization error. If you would rather have the streaming pipeline' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.streams.processor.internals.RecordDeserializer.deserialize@POLYN154314 the MagicNumber/String  ' continue after a deserialization error, please set the ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.streams.processor.internals.RecordDeserializer.deserialize@POLYN154314 the MagicNumber/String  ' appropriately.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.streams.processor.internals.RecordDeserializer.deserialize@POLYN154314 the MagicNumber/String  'Skipping record due to deserialization error. topic=[{}] partition=[{}] offset=[{}]' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.streams.processor.internals.RecordDeserializer.deserialize@POLYN154314 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.RecordDeserializer.deserialize@POLYN154314"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#60"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00060] In the recursive method org.apache.kafka.streams.processor.internals.RecordDeserializer.deserialize@POLYN154314 the MagicNumber/String 'Deserialization error callback failed after deserialization error for record {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#63"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00063] In the recursive method org.apache.kafka.streams.processor.internals.RecordDeserializer.deserialize@POLYN154314 the MagicNumber/String 'Fatal user code error in deserialization error callback' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#67"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00067] In the recursive method org.apache.kafka.streams.processor.internals.RecordDeserializer.deserialize@POLYN154314 the MagicNumber/String 'Deserialization exception handler is set to fail upon' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#68"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00068] In the recursive method org.apache.kafka.streams.processor.internals.RecordDeserializer.deserialize@POLYN154314 the MagicNumber/String ' a deserialization error. If you would rather have the streaming pipeline' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#69"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00069] In the recursive method org.apache.kafka.streams.processor.internals.RecordDeserializer.deserialize@POLYN154314 the MagicNumber/String ' continue after a deserialization error, please set the ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#70"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00070] In the recursive method org.apache.kafka.streams.processor.internals.RecordDeserializer.deserialize@POLYN154314 the MagicNumber/String ' appropriately.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#74"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00074] In the recursive method org.apache.kafka.streams.processor.internals.RecordDeserializer.deserialize@POLYN154314 the MagicNumber/String 'Skipping record due to deserialization error. topic=[{}] partition=[{}] offset=[{}]' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RecordDeserializer.java.html#81"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00081] In the recursive method org.apache.kafka.streams.processor.internals.RecordDeserializer.deserialize@POLYN154314 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
