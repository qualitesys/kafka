console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java 50 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "KStreamAggProcessorSupplier<KIn,VIn,Windowed<KIn>,VAgg>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.KStreamWindowAggregate"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.KStreamWindowAggregate" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#52"
 , "c1" : "KStreamWindowAggregate"
 , "c2" : "KStreamWindowAggregate(Windows&lt;W&gt;;String;EmitStrategy;Initializer&lt;VAgg&gt;;Aggregator&lt;?superKIn,?superVIn,VAgg&gt;)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00072"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#72"
 , "c1" : "Processor&lt;KIn,VIn,Windowed&lt;KIn&gt;,Change&lt;VAgg&gt;&gt;"
 , "c2" : "get()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00076"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#76"
 , "c1" : "Windows&lt;W&gt;"
 , "c2" : "windows()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00081"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#81"
 , "c1" : "void"
 , "c2" : "enableSendingOldValues()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00184"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#184"
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

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.svg" }

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
 , "c4" : "12"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "18"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
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
 , "c1" : "00054"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#54"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00054] The argument emitStrategy is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.streams.kstream.internals.KStreamWindowAggregate.KStreamWindowAggregate@POLYN179154 the MagicNumber/String  'ON_WINDOW_CLOSE strategy is only supported for ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.streams.kstream.internals.KStreamWindowAggregate.KStreamWindowAggregate@POLYN179154 the MagicNumber/String  'TimeWindows and SlidingWindows for TimeWindowedKStream' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.streams.kstream.internals.KStreamWindowAggregate.enableSendingOldValues@POLYN180471 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#91"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00091] For method process arguments Record&lt;KIn ,VIn &gt;  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#91"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00091] For method process list of called methods Object monObjet|java.util.Map windows_windowsForN182018|org.apache.kafka.common.Cluster windowStore_fetchN182531|VA initializer_applyN182893|VA aggregator_applyN183218"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#91"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00091] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00119] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00122] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00123] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00125] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00141] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.streams.kstream.internals.KStreamWindowAggregate.KStreamWindowAggregateProcessor.process@POLYN180905 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.streams.kstream.internals.KStreamWindowAggregate.KStreamWindowAggregateProcessor.process@POLYN180905 the MagicNumber/String  'Skipping record due to null key. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.streams.kstream.internals.KStreamWindowAggregate.KStreamWindowAggregateProcessor.process@POLYN180905 the MagicNumber/String  'topic=[{}] partition=[{}] offset=[{}]' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.streams.kstream.internals.KStreamWindowAggregate.KStreamWindowAggregateProcessor.process@POLYN180905 the MagicNumber/String  'Skipping record due to null key. Topic, partition, and offset not known.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.streams.kstream.internals.KStreamWindowAggregate.KStreamWindowAggregateProcessor.process@POLYN180905 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.streams.kstream.internals.KStreamWindowAggregate.KStreamWindowAggregateProcessor.process@POLYN180905 the MagicNumber/String  '[' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.streams.kstream.internals.KStreamWindowAggregate.KStreamWindowAggregateProcessor.process@POLYN180905 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.streams.kstream.internals.KStreamWindowAggregate.KStreamWindowAggregateProcessor.process@POLYN180905 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#150"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00150] For method emitRangeLowerBound arguments long  windowCloseTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.streams.kstream.internals.KStreamWindowAggregate.KStreamWindowAggregateProcessor.emitRangeLowerBound@POLYN184168 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.streams.kstream.internals.KStreamWindowAggregate.KStreamWindowAggregateProcessor.emitRangeLowerBound@POLYN184168 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.streams.kstream.internals.KStreamWindowAggregate.KStreamWindowAggregateProcessor.emitRangeLowerBound@POLYN184168 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#158"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00158] For method emitRangeUpperBound arguments long  windowCloseTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#163"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00163] For method shouldRangeFetch arguments long  emitRangeLowerBound|long  emitRangeUpperBound"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#163"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00163] For method shouldRangeFetch list of called methods Object monObjet|java.util.Map windows_windowsForN184914|java.util.Map windows_windowsForN185050"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.streams.kstream.internals.KStreamWindowAggregate.KStreamWindowAggregateProcessor.shouldRangeFetch@POLYN184665 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.streams.kstream.internals.KStreamWindowAggregate.KStreamWindowAggregateProcessor.shouldRangeFetch@POLYN184665 the MagicNumber/String  'No new windows to emit. LastEmitCloseTime={}, emitRangeLowerBound={}, emitRangeUpperBound={}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method org.apache.kafka.streams.kstream.internals.KStreamWindowAggregate.KStreamWindowAggregateProcessor.shouldRangeFetch@POLYN184665 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method org.apache.kafka.streams.kstream.internals.KStreamWindowAggregate.KStreamWindowAggregateProcessor.shouldRangeFetch@POLYN184665 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00202"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#202"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00202] For method init arguments ProcessorContext&lt;? ,? &gt;  context"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00202"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#202"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00202] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#208"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00208] For method get arguments Windowed&lt;KIn &gt;  windowedKey"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#208"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00208] For method get list of called methods Object monObjet|K windowedKey_keyN186593"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#208"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00208] The argument windowedKey is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.kstream.internals.KStreamWindowAggregate.KStreamWindowAggregateProcessor.process@POLYN180905"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.kstream.internals.KStreamWindowAggregate.KStreamWindowAggregateProcessor.shouldRangeFetch@POLYN184665"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#92"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00092] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamWindowAggregate.KStreamWindowAggregateProcessor.process@POLYN180905 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#96"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00096] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamWindowAggregate.KStreamWindowAggregateProcessor.process@POLYN180905 the MagicNumber/String 'Skipping record due to null key. ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#97"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00097] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamWindowAggregate.KStreamWindowAggregateProcessor.process@POLYN180905 the MagicNumber/String 'topic=[{}] partition=[{}] offset=[{}]' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#102"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00102] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamWindowAggregate.KStreamWindowAggregateProcessor.process@POLYN180905 the MagicNumber/String 'Skipping record due to null key. Topic, partition, and offset not known.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#128"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00128] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamWindowAggregate.KStreamWindowAggregateProcessor.process@POLYN180905 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#141"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00141] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamWindowAggregate.KStreamWindowAggregateProcessor.process@POLYN180905 the MagicNumber/String '-' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#141"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00141] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamWindowAggregate.KStreamWindowAggregateProcessor.process@POLYN180905 the MagicNumber/String ',' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#141"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00141] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamWindowAggregate.KStreamWindowAggregateProcessor.process@POLYN180905 the MagicNumber/String '[' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#170"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00170] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamWindowAggregate.KStreamWindowAggregateProcessor.shouldRangeFetch@POLYN184665 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#173"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00173] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamWindowAggregate.KStreamWindowAggregateProcessor.shouldRangeFetch@POLYN184665 the MagicNumber/String 'No new windows to emit. LastEmitCloseTime={}, emitRangeLowerBound={}, emitRangeUpperBound={}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#175"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00175] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamWindowAggregate.KStreamWindowAggregateProcessor.shouldRangeFetch@POLYN184665 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.html#179"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00179] In the recursive method org.apache.kafka.streams.kstream.internals.KStreamWindowAggregate.KStreamWindowAggregateProcessor.shouldRangeFetch@POLYN184665 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamWindowAggregate.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
