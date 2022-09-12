console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java 59 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "KStreamAggProcessorSupplier<KIn,VIn,Windowed<KIn>,VAgg>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.KStreamSessionWindowAggregate"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.KStreamSessionWindowAggregate" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00049"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#49"
 , "c1" : "KStreamSessionWindowAggregate"
 , "c2" : "KStreamSessionWindowAggregate(SessionWindows;String;EmitStrategy;Initializer<VAgg>;Aggregator<?superKIn,?superVIn,VAgg>;Merger<?superKIn,VAgg>)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00064"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#64"
 , "c1" : "Processor<KIn,VIn,Windowed<KIn>,Change<VAgg>>"
 , "c2" : "get()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00068"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#68"
 , "c1" : "SessionWindows"
 , "c2" : "windows()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00073"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#73"
 , "c1" : "void"
 , "c2" : "enableSendingOldValues()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00331"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#331"
 , "c1" : "SessionWindow"
 , "c2" : "mergeSessionWindow(SessionWindow;SessionWindow)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00338"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#338"
 , "c1" : "KTableValueGetterSupplier<Windowed<KIn>,VAgg>"
 , "c2" : "view()"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "9"
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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "33"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "12"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00036] The class KStreamSessionWindowAggregate contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.streams.kstream.internals.KStreamSessionWindowAggregate.enableSendingOldValues@POLYN200916 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#93"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00093] For method init arguments ProcessorContext&lt;Windowed&lt;KIn &gt; ,Change&lt;VAgg &gt; &gt;  context"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#93"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00093] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.streams.kstream.internals.KStreamSessionWindowAggregate.KStreamSessionWindowAggregateProcessor.init@POLYN201929 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.streams.kstream.internals.KStreamSessionWindowAggregate.KStreamSessionWindowAggregateProcessor.init@POLYN201929 the MagicNumber/String  1000L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#128"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00128] For method process arguments Record&lt;KIn ,VIn &gt;  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#128"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00128] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00153] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00156] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.streams.kstream.internals.KStreamSessionWindowAggregate.KStreamSessionWindowAggregateProcessor.process@POLYN204204 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.streams.kstream.internals.KStreamSessionWindowAggregate.KStreamSessionWindowAggregateProcessor.process@POLYN204204 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method org.apache.kafka.streams.kstream.internals.KStreamSessionWindowAggregate.KStreamSessionWindowAggregateProcessor.process@POLYN204204 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#181"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00181] For method maybeForwardUpdate arguments Windowed&lt;KIn &gt;  windowedkey|VAgg  oldAgg|VAgg  newAgg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#181"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00181] The argument windowedkey is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00190"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.streams.kstream.internals.KStreamSessionWindowAggregate.KStreamSessionWindowAggregateProcessor.maybeForwardUpdate@POLYN207442 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#194"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00194] For method maybeForwardFinalResult arguments Record&lt;KIn ,VIn &gt;  record|long  windowCloseTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00200"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.streams.kstream.internals.KStreamSessionWindowAggregate.KStreamSessionWindowAggregateProcessor.maybeForwardFinalResult@POLYN208088 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00210"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#210"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00210] For method shouldEmitFinal arguments long  windowCloseTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00212"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method org.apache.kafka.streams.kstream.internals.KStreamSessionWindowAggregate.KStreamSessionWindowAggregateProcessor.shouldEmitFinal@POLYN208783 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00218"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00218] In method org.apache.kafka.streams.kstream.internals.KStreamSessionWindowAggregate.KStreamSessionWindowAggregateProcessor.shouldEmitFinal@POLYN208783 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00231"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00231] In method org.apache.kafka.streams.kstream.internals.KStreamSessionWindowAggregate.KStreamSessionWindowAggregateProcessor.emitRangeLowerBound@POLYN209424 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00234"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#234"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00234] For method emitRangeUpperBound arguments long  windowCloseTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00237"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#237"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00237] In method org.apache.kafka.streams.kstream.internals.KStreamSessionWindowAggregate.KStreamSessionWindowAggregateProcessor.emitRangeUpperBound@POLYN209573 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00240"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#240"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00240] For method shouldRangeFetch arguments long  emitRangeLowerBound|long  emitRangeUpperBound"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00246"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#246"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00246] For method fetchAndEmit arguments Record&lt;KIn ,VIn &gt;  record|long  windowCloseTime|long  emitRangeLowerBound|long  emitRangeUpperBound"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00246"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#246"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00246] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00260"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#260"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00260] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00257"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00257] In method org.apache.kafka.streams.kstream.internals.KStreamSessionWindowAggregate.KStreamSessionWindowAggregateProcessor.fetchAndEmit@POLYN209861 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00264"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00264] In method org.apache.kafka.streams.kstream.internals.KStreamSessionWindowAggregate.KStreamSessionWindowAggregateProcessor.fetchAndEmit@POLYN209861 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00280"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#280"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00280] In method org.apache.kafka.streams.kstream.internals.KStreamSessionWindowAggregate.KStreamSessionWindowAggregateProcessor.logSkippedRecordForNullKey@POLYN211325 the MagicNumber/String  'Skipping record due to null key. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00281"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#281"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00281] In method org.apache.kafka.streams.kstream.internals.KStreamSessionWindowAggregate.KStreamSessionWindowAggregateProcessor.logSkippedRecordForNullKey@POLYN211325 the MagicNumber/String  'topic=[{}] partition=[{}] offset=[{}]' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00286"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#286"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00286] In method org.apache.kafka.streams.kstream.internals.KStreamSessionWindowAggregate.KStreamSessionWindowAggregateProcessor.logSkippedRecordForNullKey@POLYN211325 the MagicNumber/String  'Skipping record due to null key. Topic, partition, and offset not known.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00292"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#292"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00292] For method logSkippedRecordForExpiredWindow arguments long  timestamp|long  windowExpire|SessionWindow  window"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#294"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00294] The argument window is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00295"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#295"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00295] In method org.apache.kafka.streams.kstream.internals.KStreamSessionWindowAggregate.KStreamSessionWindowAggregateProcessor.logSkippedRecordForExpiredWindow@POLYN211949 the MagicNumber/String  '[' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00295"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#295"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00295] In method org.apache.kafka.streams.kstream.internals.KStreamSessionWindowAggregate.KStreamSessionWindowAggregateProcessor.logSkippedRecordForExpiredWindow@POLYN211949 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00295"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#295"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00295] In method org.apache.kafka.streams.kstream.internals.KStreamSessionWindowAggregate.KStreamSessionWindowAggregateProcessor.logSkippedRecordForExpiredWindow@POLYN211949 the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00299"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#299"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00299] In method org.apache.kafka.streams.kstream.internals.KStreamSessionWindowAggregate.KStreamSessionWindowAggregateProcessor.logSkippedRecordForExpiredWindow@POLYN211949 the MagicNumber/String  'Skipping record for expired window. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00300"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00300] In method org.apache.kafka.streams.kstream.internals.KStreamSessionWindowAggregate.KStreamSessionWindowAggregateProcessor.logSkippedRecordForExpiredWindow@POLYN211949 the MagicNumber/String  'topic=[{}] ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method org.apache.kafka.streams.kstream.internals.KStreamSessionWindowAggregate.KStreamSessionWindowAggregateProcessor.logSkippedRecordForExpiredWindow@POLYN211949 the MagicNumber/String  'partition=[{}] ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00302"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#302"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00302] In method org.apache.kafka.streams.kstream.internals.KStreamSessionWindowAggregate.KStreamSessionWindowAggregateProcessor.logSkippedRecordForExpiredWindow@POLYN211949 the MagicNumber/String  'offset=[{}] ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00303"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#303"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00303] In method org.apache.kafka.streams.kstream.internals.KStreamSessionWindowAggregate.KStreamSessionWindowAggregateProcessor.logSkippedRecordForExpiredWindow@POLYN211949 the MagicNumber/String  'timestamp=[{}] ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00304"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00304] In method org.apache.kafka.streams.kstream.internals.KStreamSessionWindowAggregate.KStreamSessionWindowAggregateProcessor.logSkippedRecordForExpiredWindow@POLYN211949 the MagicNumber/String  'window={} ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00305"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00305] In method org.apache.kafka.streams.kstream.internals.KStreamSessionWindowAggregate.KStreamSessionWindowAggregateProcessor.logSkippedRecordForExpiredWindow@POLYN211949 the MagicNumber/String  'expiration=[{}] ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00306"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#306"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00306] In method org.apache.kafka.streams.kstream.internals.KStreamSessionWindowAggregate.KStreamSessionWindowAggregateProcessor.logSkippedRecordForExpiredWindow@POLYN211949 the MagicNumber/String  'streamTime=[{}]' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00316"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#316"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00316] In method org.apache.kafka.streams.kstream.internals.KStreamSessionWindowAggregate.KStreamSessionWindowAggregateProcessor.logSkippedRecordForExpiredWindow@POLYN211949 the MagicNumber/String  'Skipping record for expired window. Topic, partition, and offset not known. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00317"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method org.apache.kafka.streams.kstream.internals.KStreamSessionWindowAggregate.KStreamSessionWindowAggregateProcessor.logSkippedRecordForExpiredWindow@POLYN211949 the MagicNumber/String  'timestamp=[{}] ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00318"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#318"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00318] In method org.apache.kafka.streams.kstream.internals.KStreamSessionWindowAggregate.KStreamSessionWindowAggregateProcessor.logSkippedRecordForExpiredWindow@POLYN211949 the MagicNumber/String  'window={} ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00319"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#319"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00319] In method org.apache.kafka.streams.kstream.internals.KStreamSessionWindowAggregate.KStreamSessionWindowAggregateProcessor.logSkippedRecordForExpiredWindow@POLYN211949 the MagicNumber/String  'expiration=[{}] ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00320"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#320"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00320] In method org.apache.kafka.streams.kstream.internals.KStreamSessionWindowAggregate.KStreamSessionWindowAggregateProcessor.logSkippedRecordForExpiredWindow@POLYN211949 the MagicNumber/String  'streamTime=[{}]' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00331"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#331"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00331] For method mergeSessionWindow arguments SessionWindow  one|SessionWindow  two"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00331"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#331"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00331] The argument one is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00331"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#331"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00331] The argument two is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00352"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#352"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00352] The class KTableSessionWindowValueGetter contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00357"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#357"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00357] For method init arguments ProcessorContext&lt;? ,? &gt;  context"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00357"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#357"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00357] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00362"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#362"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00362] For method get arguments Windowed&lt;KIn &gt;  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00362"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamSessionWindowAggregate.java.html#362"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00362] The argument key is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
};
console.log('leListeStr 99 main end');
