console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java 119 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "KStreamAggProcessorSupplier<KIn,VIn,Windowed<KIn>,VAgg>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "KStreamSlidingWindowAggregate"
 , "c2" : "KStreamSlidingWindowAggregate(SlidingWindows;String;EmitStrategy;Initializer<VAgg>;Aggregator<?superKIn,?superVIn,VAgg>)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "Processor<KIn,VIn,Windowed<KIn>,Change<VAgg>>"
 , "c2" : "get()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "SlidingWindows"
 , "c2" : "windows()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "enableSendingOldValues()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KTableValueGetterSupplier<Windowed<KIn>,VAgg>"
 , "c2" : "view()"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.svg" }

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
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "15"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "79"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "16"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00026] The class KStreamSlidingWindowAggregate contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.enableSendingOldValues@POLYN219719 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00074] For method process arguments Record&lt;KIn ,VIn &gt;  record"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#74"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00074] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN220219 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN220219 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN220219 the MagicNumber/String  'Skipping record due to null key or value. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN220219 the MagicNumber/String  'topic=[{}] partition=[{}] offset=[{}]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN220219 the MagicNumber/String  'Skipping record due to null key or value. Topic, partition, and offset not known.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN220219 the MagicNumber/String  '[' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN220219 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN220219 the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN220219 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN220219 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN220219 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN220219 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN220219 the MagicNumber/String  'Sliding Windows aggregate using a reverse iterator' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN220219 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.process@POLYN220219 the MagicNumber/String  'Sliding Windows aggregate using a forward iterator' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#128"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00128] For method processInOrder arguments Record&lt;KIn ,VIn &gt;  record|long  windowCloseTime"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#128"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00128] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00150"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00150] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00169] The same method call record.timestamp() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN222942 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN222942 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN222942 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN222942 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN222942 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN222942 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN222942 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN222942 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00160"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN222942 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN222942 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN222942 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN222942 the MagicNumber/String  'Unexpected window with start {} found when processing record at {} in `KStreamSlidingWindowAggregate`.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processInOrder@POLYN222942 the MagicNumber/String  'Unexpected window found when processing sliding windows' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#190"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00190] For method processReverse arguments Record&lt;KIn ,VIn &gt;  record|long  windowCloseTime"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#190"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00190] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00212"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00212] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00194"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN226278 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN226278 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN226278 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN226278 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00201"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN226278 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00207"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00207] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN226278 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00207"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00207] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN226278 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00209"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#209"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00209] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN226278 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00217"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN226278 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00218] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN226278 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00220"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#220"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00220] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN226278 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00225"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#225"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00225] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN226278 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00238"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00238] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN226278 the MagicNumber/String  'Unexpected window with start {} found when processing record at {} in `KStreamSlidingWindowAggregate`.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00241"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00241] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processReverse@POLYN226278 the MagicNumber/String  'Unexpected window found when processing sliding windows' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00249"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#249"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00249] For method processEarly arguments Record&lt;KIn ,VIn &gt;  record|long  windowCloseTime"
}} 
,
{ "ligne" : {
   "c1" : "00249"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#249"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00249] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00250"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00250] The same method call record.timestamp()windows.timeDifferenceMs() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00275"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#275"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00275] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00250"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00250] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN229882 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00252"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00252] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN229882 the MagicNumber/String  'Early record for sliding windows must fall between fall between 0 &amp;lt;= inputRecordTimestamp. Timestamp {} does not fall between 0 &amp;lt;= {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00255"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00255] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN229882 the MagicNumber/String  'Early record for sliding windows must fall between fall between 0 &amp;lt;= inputRecordTimestamp' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00259"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#259"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00259] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN229882 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00260"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#260"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00260] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN229882 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00261"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#261"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00261] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN229882 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00264"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00264] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN229882 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00270"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#270"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00270] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN229882 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00272"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#272"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00272] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN229882 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00280"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#280"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00280] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN229882 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00292"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#292"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00292] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN229882 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00293"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#293"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00293] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN229882 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00296"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00296] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN229882 the MagicNumber/String  'Unexpected window with start {} found when processing record at {} in `KStreamSlidingWindowAggregate`.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00299"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#299"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00299] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN229882 the MagicNumber/String  'Unexpected window found when processing sliding windows' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00311"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#311"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00311] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN229882 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00311"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#311"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00311] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN229882 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00320"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#320"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00320] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN229882 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00320"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#320"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00320] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN229882 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00321"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#321"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00321] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN229882 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00324"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#324"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00324] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN229882 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00325"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#325"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00325] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.processEarly@POLYN229882 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00336"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#336"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00336] For method createWindows arguments Record&lt;KIn ,VIn &gt;  record|long  closeTime|Set&lt;Long &gt;  windowStartTimes|ValueAndTimestamp&lt;VAgg &gt;  rightWinAgg|ValueAndTimestamp&lt;VAgg &gt;  leftWinAgg|boolean  leftWinAlreadyCreated|boolean  rightWinAlreadyCreated|Long  previousRecordTimestamp"
}} 
,
{ "ligne" : {
   "c1" : "00336"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#336"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00336] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00340"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#340"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00340] The argument leftWinAgg is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00345"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#345"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00345] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.createWindows@POLYN234280 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00346"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#346"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00346] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.createWindows@POLYN234280 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00370"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#370"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00370] For method createCurrentRecordRightWindow arguments long  inputRecordTimestamp|ValueAndTimestamp&lt;VAgg &gt;  rightWinAgg|Record&lt;KIn ,VIn &gt;  record"
}} 
,
{ "ligne" : {
   "c1" : "00371"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#371"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00371] The argument rightWinAgg is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00372"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#372"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00372] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00373"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#373"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00373] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.createCurrentRecordRightWindow@POLYN236240 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00373"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#373"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00373] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.createCurrentRecordRightWindow@POLYN236240 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00378"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#378"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00378] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.createCurrentRecordRightWindow@POLYN236240 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00381"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#381"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00381] For method createPreviousRecordRightWindow arguments long  windowStart|Record&lt;KIn ,VIn &gt;  record|long  closeTime"
}} 
,
{ "ligne" : {
   "c1" : "00382"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#382"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00382] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00390"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#390"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00390] For method leftWindowNotEmpty arguments Long  previousRecordTimestamp|long  inputRecordTimestamp"
}} 
,
{ "ligne" : {
   "c1" : "00391"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#391"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00391] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.leftWindowNotEmpty@POLYN237618 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00395"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#395"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00395] For method previousRecordRightWindowDoesNotExistAndIsNotEmpty arguments Set&lt;Long &gt;  windowStartTimes|long  previousRightWindowStart|long  inputRecordTimestamp"
}} 
,
{ "ligne" : {
   "c1" : "00395"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#395"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00395] The argument windowStartTimes is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00402"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#402"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00402] For method rightWindowIsNotEmpty arguments ValueAndTimestamp&lt;VAgg &gt;  rightWinAgg|long  inputRecordTimestamp"
}} 
,
{ "ligne" : {
   "c1" : "00403"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#403"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00403] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.rightWindowIsNotEmpty@POLYN238189 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00407"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#407"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00407] For method emitRangeLowerBound arguments long  windowCloseTime"
}} 
,
{ "ligne" : {
   "c1" : "00409"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#409"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00409] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.emitRangeLowerBound@POLYN238451 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00409"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#409"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00409] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.emitRangeLowerBound@POLYN238451 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00413"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#413"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00413] For method emitRangeUpperBound arguments long  windowCloseTime"
}} 
,
{ "ligne" : {
   "c1" : "00416"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#416"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00416] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.emitRangeUpperBound@POLYN238757 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00420"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#420"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00420] For method shouldRangeFetch arguments long  emitRangeLowerBound|long  emitRangeUpperBound"
}} 
,
{ "ligne" : {
   "c1" : "00421"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#421"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00421] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.shouldRangeFetch@POLYN238948 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00424"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#424"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00424] For method updateWindowAndForward arguments Window  window|ValueAndTimestamp&lt;VAgg &gt;  valueAndTime|Record&lt;KIn ,VIn &gt;  record|long  windowCloseTime"
}} 
,
{ "ligne" : {
   "c1" : "00424"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#424"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00424] The argument window is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00425"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#425"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00425] The argument valueAndTime is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00426"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#426"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00426] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00436"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#436"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00436] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.updateWindowAndForward@POLYN239081 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00443"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#443"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00443] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.updateWindowAndForward@POLYN239081 the MagicNumber/String  '[' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00443"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#443"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00443] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.updateWindowAndForward@POLYN239081 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00443"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#443"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00443] In method org.apache.kafka.streams.kstream.internals.KStreamSlidingWindowAggregate.KStreamSlidingWindowAggregateProcessor.updateWindowAndForward@POLYN239081 the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00464"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#464"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00464] The class KStreamWindowAggregateValueGetter contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00468"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#468"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00468] For method init arguments ProcessorContext&lt;? ,? &gt;  context"
}} 
,
{ "ligne" : {
   "c1" : "00468"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#468"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00468] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00473"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#473"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00473] For method get arguments Windowed&lt;KIn &gt;  windowedKey"
}} 
,
{ "ligne" : {
   "c1" : "00473"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#473"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00473] The argument windowedKey is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00479"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#479"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00479] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00479"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSlidingWindowAggregate.java.html#479"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00479] Void method close is empty or contains only a return. Interface segregation"
}} 
]
};
console.log('leListeStr 99 main end');
