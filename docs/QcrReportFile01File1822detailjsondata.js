console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalProcessorContextImpl.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalProcessorContextImpl.java 18 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalProcessorContextImpl.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractProcessorContext<Object,Object>"
 , "c2" : "org.apache.kafka.streams.processor.internals.GlobalProcessorContextImpl"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.GlobalProcessorContextImpl" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00029"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalProcessorContextImpl.java.html#29"
 , "c1" : "GlobalProcessorContextImpl"
 , "c2" : "GlobalProcessorContextImpl(StreamsConfig;GlobalStateManager;StreamsMetricsImpl;ThreadCache;Time)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00040"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalProcessorContextImpl.java.html#40"
 , "c1" : "StateManager"
 , "c2" : "stateManager()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00097"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalProcessorContextImpl.java.html#97"
 , "c1" : "void"
 , "c2" : "commit()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00102"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalProcessorContextImpl.java.html#102"
 , "c1" : "long"
 , "c2" : "currentSystemTimeMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00107"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalProcessorContextImpl.java.html#107"
 , "c1" : "long"
 , "c2" : "currentStreamTimeMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00113"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalProcessorContextImpl.java.html#113"
 , "c1" : "Cancellable"
 , "c2" : "schedule(Duration;PunctuationType;Punctuator)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00118"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalProcessorContextImpl.java.html#118"
 , "c1" : "void"
 , "c2" : "logChange(String;Bytes;byte[];long;Position)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00127"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalProcessorContextImpl.java.html#127"
 , "c1" : "void"
 , "c2" : "transitionToActive(StreamTask;RecordCollector;ThreadCache)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00132"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalProcessorContextImpl.java.html#132"
 , "c1" : "void"
 , "c2" : "transitionToStandby(ThreadCache)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00137"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalProcessorContextImpl.java.html#137"
 , "c1" : "void"
 , "c2" : "registerCacheFlushListener(String;DirtyEntryFlushListener)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalProcessorContextImpl.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalProcessorContextImpl.java.svg" }

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
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "9"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalProcessorContextImpl.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.streams.processor.internals.GlobalProcessorContextImpl.GlobalProcessorContextImpl@POLYN163658 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalProcessorContextImpl.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.streams.processor.internals.GlobalProcessorContextImpl.GlobalProcessorContextImpl@POLYN163658 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalProcessorContextImpl.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00058] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalProcessorContextImpl.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.streams.processor.internals.GlobalProcessorContextImpl the MagicNumber/String  'this should not happen: forward() not supported in global processor context.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalProcessorContextImpl.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.streams.processor.internals.GlobalProcessorContextImpl the MagicNumber/String  'This method should only be called on 'GlobalStateStore.flush' that should not have any children.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalProcessorContextImpl.java.html#84"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00084] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalProcessorContextImpl.java.html#89"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00089] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalProcessorContextImpl.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.streams.processor.internals.GlobalProcessorContextImpl.currentStreamTimeMs@POLYN167485 the MagicNumber/String  'There is no concept of stream-time for a global processor.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalProcessorContextImpl.java.html#113"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00113] For method schedule arguments Duration  interval|PunctuationType  type|Punctuator  callback"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalProcessorContextImpl.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.streams.processor.internals.GlobalProcessorContextImpl.schedule@POLYN167663 the MagicNumber/String  'this should not happen: schedule() not supported in global processor context.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalProcessorContextImpl.java.html#118"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00118] For method logChange arguments String  storeName|Bytes  key|byte[]  value|long  timestamp|Position  position"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalProcessorContextImpl.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.streams.processor.internals.GlobalProcessorContextImpl.logChange@POLYN167876 the MagicNumber/String  'this should not happen: logChange() not supported in global processor context.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalProcessorContextImpl.java.html#127"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00127] For method transitionToActive arguments StreamTask  streamTask|RecordCollector  recordCollector|ThreadCache  newCache"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalProcessorContextImpl.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.streams.processor.internals.GlobalProcessorContextImpl.transitionToActive@POLYN168147 the MagicNumber/String  'this should not happen: transitionToActive() not supported in global processor context.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalProcessorContextImpl.java.html#132"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00132] For method transitionToStandby arguments ThreadCache  newCache"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalProcessorContextImpl.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.streams.processor.internals.GlobalProcessorContextImpl.transitionToStandby@POLYN168356 the MagicNumber/String  'this should not happen: transitionToStandby() not supported in global processor context.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalProcessorContextImpl.java.html#137"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00137] For method registerCacheFlushListener arguments String  namespace|DirtyEntryFlushListener  listener"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalProcessorContextImpl.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.GlobalProcessorContextImpl.currentSystemTimeMs@POLYN167365"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalProcessorContextImpl.java.svg" }

};
console.log('leListeStr 99 main end');
