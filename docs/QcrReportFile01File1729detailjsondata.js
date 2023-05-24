console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java 186 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "KStreamAggProcessorSupplier<KIn,VIn,Windowed<KIn>,VAgg>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00053"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#53"
 , "c1" : "KStreamSlidingWindowAggregate"
 , "c2" : "KStreamSlidingWindowAggregate(SlidingWindows;String;EmitStrategy;Initializer&lt;VAgg&gt;;Aggregator&lt;?superKIn,?superVIn,VAgg&gt;)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00066"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#66"
 , "c1" : "Processor&lt;KIn,VIn,Windowed&lt;KIn&gt;,Change&lt;VAgg&gt;&gt;"
 , "c2" : "get()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00070"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#70"
 , "c1" : "SlidingWindows"
 , "c2" : "windows()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#75"
 , "c1" : "void"
 , "c2" : "enableSendingOldValues()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00469"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#469"
 , "c1" : "KTableValueGetterSupplier&lt;Windowed&lt;KIn&gt;,VAgg&gt;"
 , "c2" : "view()"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.svg" }

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
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "63"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "15"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "79"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "16"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.enableSendingOldValues@POLYN227305 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#89"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00089] For method process arguments Record&lt;KIn ,VIn &gt;  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#89"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00089] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN227807 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN227807 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN227807 the MagicNumber/String  'Skipping record due to null key or value. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN227807 the MagicNumber/String  'topic=[{}] partition=[{}] offset=[{}]' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN227807 the MagicNumber/String  'Skipping record due to null key or value. Topic, partition, and offset not known.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN227807 the MagicNumber/String  '[' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN227807 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN227807 the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN227807 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN227807 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN227807 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN227807 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN227807 the MagicNumber/String  'Sliding Windows aggregate using a reverse iterator' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN227807 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN227807 the MagicNumber/String  'Sliding Windows aggregate using a forward iterator' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#143"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00143] For method processInOrder arguments Record&lt;KIn ,VIn &gt;  record|long  windowCloseTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#143"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00143] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00165] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00184"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00184] The same method call record.timestamp() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN230540 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN230540 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN230540 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN230540 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN230540 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN230540 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN230540 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN230540 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN230540 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00191"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN230540 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN230540 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN230540 the MagicNumber/String  'Unexpected window with start {} found when processing record at {} in  KStreamSlidingWindowAggregate .' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00198"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN230540 the MagicNumber/String  'Unexpected window found when processing sliding windows' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00205"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#205"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00205] For method processReverse arguments Record&lt;KIn ,VIn &gt;  record|long  windowCloseTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00205"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#205"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00205] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00227"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#227"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00227] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00209"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#209"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00209] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN233896 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00210"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00210] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN233896 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00213"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#213"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00213] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN233896 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN233896 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00216"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00216] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN233896 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00222"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN233896 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00222"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN233896 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00224"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN233896 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00232"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00232] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN233896 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00233"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00233] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN233896 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00235"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#235"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00235] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN233896 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00240"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#240"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00240] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN233896 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00253"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#253"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00253] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN233896 the MagicNumber/String  'Unexpected window with start {} found when processing record at {} in  KStreamSlidingWindowAggregate .' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00256"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00256] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN233896 the MagicNumber/String  'Unexpected window found when processing sliding windows' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00268"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#268"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00268] For method processEarly arguments Record&lt;KIn ,VIn &gt;  record|long  windowCloseTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00268"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#268"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00268] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00269"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#269"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00269] The same method call record.timestamp()windows.timeDifferenceMs() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00294] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00269"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#269"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00269] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00271"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00271] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String  'Early record for sliding windows must fall between fall between 0 &amp;lt;= inputRecordTimestamp. Timestamp {} does not fall between 0 &amp;lt;= {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00274"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#274"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00274] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String  'Early record for sliding windows must fall between fall between 0 &amp;lt;= inputRecordTimestamp' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00278"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#278"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00278] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00279"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00279] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00280"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#280"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00280] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00283"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#283"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00283] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00289"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#289"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00289] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00291"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#291"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00291] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00299"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#299"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00299] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00311"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#311"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00311] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00312"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#312"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00312] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00315"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#315"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00315] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String  'Unexpected window with start {} found when processing record at {} in  KStreamSlidingWindowAggregate .' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00318"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#318"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00318] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String  'Unexpected window found when processing sliding windows' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00330"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#330"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00330] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00330"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#330"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00330] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00339"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#339"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00339] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00339"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#339"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00339] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00340"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#340"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00340] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00343"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#343"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00343] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00344"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#344"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00344] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00355"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#355"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00355] For method createWindows arguments Record&lt;KIn ,VIn &gt;  record|long  closeTime|Set&lt;Long &gt;  windowStartTimes|ValueAndTimestamp&lt;VAgg &gt;  rightWinAgg|ValueAndTimestamp&lt;VAgg &gt;  leftWinAgg|boolean  leftWinAlreadyCreated|boolean  rightWinAlreadyCreated|Long  previousRecordTimestamp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00355"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#355"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00355] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00359"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#359"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00359] The argument leftWinAgg is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00364"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#364"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00364] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.createWindows@POLYN241938 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00365"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#365"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00365] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.createWindows@POLYN241938 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00389"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#389"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00389] For method createCurrentRecordRightWindow arguments long  inputRecordTimestamp|ValueAndTimestamp&lt;VAgg &gt;  rightWinAgg|Record&lt;KIn ,VIn &gt;  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00390"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#390"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00390] The argument rightWinAgg is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00391"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#391"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00391] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00392"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#392"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00392] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.createCurrentRecordRightWindow@POLYN243904 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00392"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#392"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00392] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.createCurrentRecordRightWindow@POLYN243904 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00397"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#397"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00397] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.createCurrentRecordRightWindow@POLYN243904 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00400"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#400"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00400] For method createPreviousRecordRightWindow arguments long  windowStart|Record&lt;KIn ,VIn &gt;  record|long  closeTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00401"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#401"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00401] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00409"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#409"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00409] For method leftWindowNotEmpty arguments Long  previousRecordTimestamp|long  inputRecordTimestamp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00410"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#410"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00410] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.leftWindowNotEmpty@POLYN245288 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00414"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#414"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00414] For method previousRecordRightWindowDoesNotExistAndIsNotEmpty arguments Set&lt;Long &gt;  windowStartTimes|long  previousRightWindowStart|long  inputRecordTimestamp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00414"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#414"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00414] The argument windowStartTimes is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00421"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#421"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00421] For method rightWindowIsNotEmpty arguments ValueAndTimestamp&lt;VAgg &gt;  rightWinAgg|long  inputRecordTimestamp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00422"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#422"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00422] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.rightWindowIsNotEmpty@POLYN245859 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00426"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#426"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00426] For method emitRangeLowerBound arguments long  windowCloseTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00428"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#428"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00428] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.emitRangeLowerBound@POLYN246121 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00428"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#428"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00428] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.emitRangeLowerBound@POLYN246121 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00432"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#432"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00432] For method emitRangeUpperBound arguments long  windowCloseTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00435"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#435"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00435] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.emitRangeUpperBound@POLYN246427 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00439"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#439"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00439] For method shouldRangeFetch arguments long  emitRangeLowerBound|long  emitRangeUpperBound"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00440"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#440"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00440] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.shouldRangeFetch@POLYN246618 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00443"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#443"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00443] For method updateWindowAndForward arguments Window  window|ValueAndTimestamp&lt;VAgg &gt;  valueAndTime|Record&lt;KIn ,VIn &gt;  record|long  windowCloseTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00443"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#443"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00443] For method updateWindowAndForward list of called methods Object monObjet|long window_startN246996|long window_endN247078|VA aggregator_applyN247324"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00443"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#443"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00443] The argument window is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00444"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#444"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00444] The argument valueAndTime is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00445"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#445"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00445] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00455"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#455"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00455] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.updateWindowAndForward@POLYN246751 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00462"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#462"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00462] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.updateWindowAndForward@POLYN246751 the MagicNumber/String  '[' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00462"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#462"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00462] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.updateWindowAndForward@POLYN246751 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00462"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#462"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00462] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.updateWindowAndForward@POLYN246751 the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00487"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#487"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00487] For method init arguments ProcessorContext&lt;? ,? &gt;  context"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00487"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#487"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00487] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00492"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#492"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00492] For method get arguments Windowed&lt;KIn &gt;  windowedKey"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00492"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#492"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00492] For method get list of called methods Object monObjet|K windowedKey_keyN249506"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00492"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#492"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00492] The argument windowedKey is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00498"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#498"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00498] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00498"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#498"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00498] Void method close is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN227807"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN233896"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN230540"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#90"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00090] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN227807 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#90"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00090] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN227807 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#94"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00094] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN227807 the MagicNumber/String 'Skipping record due to null key or value. ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#95"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00095] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN227807 the MagicNumber/String 'topic=[{}] partition=[{}] offset=[{}]' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#100"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00100] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN227807 the MagicNumber/String 'Skipping record due to null key or value. Topic, partition, and offset not known.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#113"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00113] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN227807 the MagicNumber/String ',' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#113"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00113] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN227807 the MagicNumber/String '[' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#113"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00113] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN227807 the MagicNumber/String ']' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#123"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00123] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN227807 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#125"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00125] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN227807 the MagicNumber/String 0L MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#125"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00125] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN227807 the MagicNumber/String 0L MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#126"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00126] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN227807 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#127"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00127] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN227807 the MagicNumber/String 'Sliding Windows aggregate using a reverse iterator' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#129"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00129] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN227807 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#130"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00130] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN227807 the MagicNumber/String 'Sliding Windows aggregate using a forward iterator' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00269"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#269"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00269] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00271"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#271"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00271] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String 'Early record for sliding windows must fall between fall between 0 &amp;lt;= inputRecordTimestamp. Timestamp {} does not fall between 0 &amp;lt;= {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00274"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#274"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00274] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String 'Early record for sliding windows must fall between fall between 0 &amp;lt;= inputRecordTimestamp' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00278"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#278"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00278] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00279"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#279"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00279] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00280"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#280"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00280] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00283"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#283"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00283] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00289"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#289"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00289] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00291"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#291"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00291] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00299"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#299"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00299] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00311"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#311"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00311] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00312"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#312"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00312] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00315"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#315"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00315] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String 'Unexpected window with start {} found when processing record at {} in  KStreamSlidingWindowAggregate .' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00318"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#318"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00318] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String 'Unexpected window found when processing sliding windows' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00330"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#330"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00330] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00330"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#330"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00330] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00339"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#339"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00339] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00339"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#339"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00339] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00340"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#340"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00340] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00343"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#343"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00343] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00344"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#344"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00344] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN237520 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00209"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#209"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00209] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN233896 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00210"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#210"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00210] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN233896 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00213"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#213"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00213] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN233896 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#214"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00214] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN233896 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00216"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#216"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00216] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN233896 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00222"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#222"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00222] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN233896 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00222"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#222"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00222] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN233896 the MagicNumber/String 2 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00224"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#224"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00224] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN233896 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00232"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#232"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00232] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN233896 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00233"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#233"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00233] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN233896 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00235"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#235"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00235] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN233896 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00240"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#240"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00240] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN233896 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00253"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#253"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00253] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN233896 the MagicNumber/String 'Unexpected window with start {} found when processing record at {} in  KStreamSlidingWindowAggregate .' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00256"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#256"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00256] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN233896 the MagicNumber/String 'Unexpected window found when processing sliding windows' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#147"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00147] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN230540 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#148"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00148] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN230540 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#151"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00151] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN230540 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#152"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00152] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN230540 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#154"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00154] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN230540 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#160"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00160] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN230540 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#160"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00160] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN230540 the MagicNumber/String 2 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#162"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00162] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN230540 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#175"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00175] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN230540 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00191"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#191"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00191] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN230540 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#192"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00192] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN230540 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#195"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00195] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN230540 the MagicNumber/String 'Unexpected window with start {} found when processing record at {} in  KStreamSlidingWindowAggregate .' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00198"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#198"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00198] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN230540 the MagicNumber/String 'Unexpected window found when processing sliding windows' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
