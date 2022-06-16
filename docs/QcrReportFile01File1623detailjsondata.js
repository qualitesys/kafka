console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java 37 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.xml" 
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
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "21"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "10"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00056] For method init arguments ProcessorContext&lt;Windowed&lt;KIn &gt; ,Change&lt;VAgg &gt; &gt;  context"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html#56"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00056] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.streams.kstream.internals.AbstractKStreamTimeWindowAggregateProcessor.init@POLYN189124 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.streams.kstream.internals.AbstractKStreamTimeWindowAggregateProcessor.init@POLYN189124 the MagicNumber/String  1000L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html#91"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00091] For method maybeForwardUpdate arguments Record&lt;KIn ,VIn &gt;  record|Window  window|VAgg  oldAgg|VAgg  newAgg|long  newTimestamp"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html#91"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00091] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.streams.kstream.internals.AbstractKStreamTimeWindowAggregateProcessor.maybeForwardUpdate@POLYN191338 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html#106"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00106] For method maybeForwardFinalResult arguments Record&lt;KIn ,VIn &gt;  record|long  windowCloseTime"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.streams.kstream.internals.AbstractKStreamTimeWindowAggregateProcessor.maybeForwardFinalResult@POLYN192063 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html#122"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00122] For method logSkippedRecordForExpiredWindow arguments Logger  log|long  timestamp|long  windowExpire|String  window"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html#122"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00122] The argument log is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html#125"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00125] The argument window is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.streams.kstream.internals.AbstractKStreamTimeWindowAggregateProcessor.logSkippedRecordForExpiredWindow@POLYN192769 the MagicNumber/String  'Skipping record for expired window. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.streams.kstream.internals.AbstractKStreamTimeWindowAggregateProcessor.logSkippedRecordForExpiredWindow@POLYN192769 the MagicNumber/String  'topic=[{}] ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.streams.kstream.internals.AbstractKStreamTimeWindowAggregateProcessor.logSkippedRecordForExpiredWindow@POLYN192769 the MagicNumber/String  'partition=[{}] ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.streams.kstream.internals.AbstractKStreamTimeWindowAggregateProcessor.logSkippedRecordForExpiredWindow@POLYN192769 the MagicNumber/String  'offset=[{}] ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.streams.kstream.internals.AbstractKStreamTimeWindowAggregateProcessor.logSkippedRecordForExpiredWindow@POLYN192769 the MagicNumber/String  'timestamp=[{}] ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.streams.kstream.internals.AbstractKStreamTimeWindowAggregateProcessor.logSkippedRecordForExpiredWindow@POLYN192769 the MagicNumber/String  'window={} ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.streams.kstream.internals.AbstractKStreamTimeWindowAggregateProcessor.logSkippedRecordForExpiredWindow@POLYN192769 the MagicNumber/String  'expiration=[{}] ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.streams.kstream.internals.AbstractKStreamTimeWindowAggregateProcessor.logSkippedRecordForExpiredWindow@POLYN192769 the MagicNumber/String  'streamTime=[{}]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.streams.kstream.internals.AbstractKStreamTimeWindowAggregateProcessor.logSkippedRecordForExpiredWindow@POLYN192769 the MagicNumber/String  'Skipping record for expired window. Topic, partition, and offset not known. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.streams.kstream.internals.AbstractKStreamTimeWindowAggregateProcessor.logSkippedRecordForExpiredWindow@POLYN192769 the MagicNumber/String  'timestamp=[{}] ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.streams.kstream.internals.AbstractKStreamTimeWindowAggregateProcessor.logSkippedRecordForExpiredWindow@POLYN192769 the MagicNumber/String  'window={} ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.streams.kstream.internals.AbstractKStreamTimeWindowAggregateProcessor.logSkippedRecordForExpiredWindow@POLYN192769 the MagicNumber/String  'expiration=[{}] ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method org.apache.kafka.streams.kstream.internals.AbstractKStreamTimeWindowAggregateProcessor.logSkippedRecordForExpiredWindow@POLYN192769 the MagicNumber/String  'streamTime=[{}]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html#159"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00159] For method updateObservedStreamTime arguments long  timestamp"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html#163"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00163] For method shouldEmitFinal arguments long  closeTime"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method org.apache.kafka.streams.kstream.internals.AbstractKStreamTimeWindowAggregateProcessor.shouldEmitFinal@POLYN194107 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00171"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00171] In method org.apache.kafka.streams.kstream.internals.AbstractKStreamTimeWindowAggregateProcessor.shouldEmitFinal@POLYN194107 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html#183"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00183] For method fetchAndEmit arguments Record&lt;KIn ,VIn &gt;  record|long  windowCloseTime|long  emitRangeLowerBound|long  emitRangeUpperBound"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html#183"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00183] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00195] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.streams.kstream.internals.AbstractKStreamTimeWindowAggregateProcessor.fetchAndEmit@POLYN194732 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.streams.kstream.internals.AbstractKStreamTimeWindowAggregateProcessor.fetchAndEmit@POLYN194732 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html#211"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00211] For method emitRangeLowerBound arguments long  windowCloseTime"
}} 
,
{ "ligne" : {
   "c1" : "00213"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html#213"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00213] For method emitRangeUpperBound arguments long  windowCloseTime"
}} 
,
{ "ligne" : {
   "c1" : "00215"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractKStreamTimeWindowAggregateProcessor.java.html#215"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00215] For method shouldRangeFetch arguments long  emitRangeLowerBound|long  emitRangeUpperBound"
}} 
]
};
console.log('leListeStr 99 main end');
