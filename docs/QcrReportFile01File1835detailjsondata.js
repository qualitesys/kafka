console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java 67 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractProcessorContext<Object,Object>RecordCollector.Supplier"
 , "c2" : "org.apache.kafka.streams.processor.internals.ProcessorContextImpl"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.ProcessorContextImpl" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ProcessorContextImpl"
 , "c2" : "ProcessorContextImpl(TaskId;StreamsConfig;ProcessorStateManager;StreamsMetricsImpl;ThreadCache)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "transitionToActive(StreamTask;RecordCollector;ThreadCache)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "transitionToStandby(ThreadCache)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "registerCacheFlushListener(String;DirtyEntryFlushListener)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "addAllFlushListenersToNewCache()"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ProcessorStateManager"
 , "c2" : "stateManager()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "RecordCollector"
 , "c2" : "recordCollector()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "logChange(String;Bytes;byte[];long;Position)"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "commit()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Cancellable"
 , "c2" : "schedule(Duration;PunctuationType;Punctuator)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "topic()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "partition()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "offset()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "timestamp()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "currentStreamTimeMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ProcessorNode<?,?,?,?>"
 , "c2" : "currentNode()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setRecordContext(ProcessorRecordContext)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ProcessorRecordContext"
 , "c2" : "recordContext()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "throwUnsupportedOperationExceptionIfStandby(String)"
 , "c3" : "2"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.svg" }

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
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
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
 , "c4" : "51"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "7"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl.ProcessorContextImpl@POLYN208221 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method transitionToActive arguments StreamTask  streamTask|RecordCollector  recordCollector|ThreadCache  newCache"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl.transitionToActive@POLYN208753 the MagicNumber/String  'Tried to transition processor context to active but the state manager's ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl.transitionToActive@POLYN208753 the MagicNumber/String  'type was ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#73"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00073] For method transitionToStandby arguments ThreadCache  newCache"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl.transitionToStandby@POLYN209366 the MagicNumber/String  'Tried to transition processor context to standby but the state manager's ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl.transitionToStandby@POLYN209366 the MagicNumber/String  'type was ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl.transitionToStandby@POLYN209366 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl.transitionToStandby@POLYN209366 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#85"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00085] For method registerCacheFlushListener arguments String  namespace|DirtyEntryFlushListener  listener"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#107"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00107] For method logChange arguments String  storeName|Bytes  key|byte[]  value|long  timestamp|Position  position"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#107"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00107] For method logChange list of called methods Object monObjet|org.apache.kafka.streams.processor.internals.ProcessorStateManager stateManagerN211024"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl.logChange@POLYN210740 the MagicNumber/String  'logChange' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl.logChange@POLYN210740 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl.logChange@POLYN210740 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl.logChange@POLYN210740 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl the MagicNumber/String  'getStateStore' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl the MagicNumber/String  'Accessing from an unknown node' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00150"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00150] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl the MagicNumber/String  'Processor ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl the MagicNumber/String  ' has no access to StateStore ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl the MagicNumber/String  ' as the store is not connected to the processor. If you add stores manually via '.addStateStore()' ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl the MagicNumber/String  'make sure to connect the added store to the processor by providing the processor name to ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl the MagicNumber/String  ''.addStateStore()' or connect them via '.connectProcessorAndStateStores()'. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl the MagicNumber/String  'DSL users need to provide the store name to '.process()', '.transform()', or '.transformValues()' ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00160"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl the MagicNumber/String  'to connect the store to the corresponding operator, or they can provide a StoreBuilder by implementing ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl the MagicNumber/String  'the stores() method on the Supplier itself. If you do not add stores manually, ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl the MagicNumber/String  'please file a bug report at https://issues.apache.org/jira/projects/KAFKA.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#196"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00196] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00201"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#201"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00201] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00210"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00210] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00215"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#215"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00215] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00251"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00251] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00216"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00216] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl the MagicNumber/String  'forward' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00219] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00220"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#220"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00220] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl the MagicNumber/String  'Current node is unknown. This can happen if 'forward()' is called ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#221"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00221] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl the MagicNumber/String  'in an illegal scope. The root cause could be that a 'Processor' or 'Transformer' instance' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00222"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl the MagicNumber/String  ' is shared. To avoid this error, make sure that your suppliers return new instances ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00223"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#223"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00223] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl the MagicNumber/String  'each time 'get()' of Supplier is called and do not return the same object reference ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00224"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl the MagicNumber/String  'multiple times.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00239"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#239"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00239] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00248"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00248] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00255"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00255] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00256] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl the MagicNumber/String  'Unknown downstream node: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00257] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl the MagicNumber/String  ' either does not exist or is not connected to this processor.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00268"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#268"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00268] The argument child is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00269"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#269"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00269] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00281"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#281"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00281] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl.commit@POLYN218612 the MagicNumber/String  'commit' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00286"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#286"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00286] For method schedule arguments Duration  interval|PunctuationType  type|Punctuator  callback"
}} 
,
{ "ligne" : {
   "c1" : "00289"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#289"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00289] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl.schedule@POLYN218792 the MagicNumber/String  'schedule' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00290"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#290"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00290] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl.schedule@POLYN218792 the MagicNumber/String  'interval' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00292"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#292"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00292] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl.schedule@POLYN218792 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00293"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#293"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00293] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl.schedule@POLYN218792 the MagicNumber/String  'The minimum supported scheduling interval is 1 millisecond.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00300"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00300] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl.topic@POLYN219510 the MagicNumber/String  'topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00306"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#306"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00306] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl.partition@POLYN219693 the MagicNumber/String  'partition' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00312"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#312"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00312] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl.offset@POLYN219876 the MagicNumber/String  'offset' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00318"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#318"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00318] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl.timestamp@POLYN220059 the MagicNumber/String  'timestamp' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00329"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#329"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00329] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl.currentNode@POLYN220407 the MagicNumber/String  'currentNode' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00334"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#334"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00334] For method setRecordContext arguments ProcessorRecordContext  recordContext"
}} 
,
{ "ligne" : {
   "c1" : "00335"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#335"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00335] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl.setRecordContext@POLYN220582 the MagicNumber/String  'setRecordContext' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00341"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#341"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00341] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl.recordContext@POLYN220804 the MagicNumber/String  'recordContext' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00345"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#345"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00345] For method throwUnsupportedOperationExceptionIfStandby arguments String  operationName"
}} 
,
{ "ligne" : {
   "c1" : "00348"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#348"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00348] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl.throwUnsupportedOperationExceptionIfStandby@POLYN220965 the MagicNumber/String  'this should not happen: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00348"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#348"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00348] In method org.apache.kafka.streams.processor.internals.ProcessorContextImpl.throwUnsupportedOperationExceptionIfStandby@POLYN220965 the MagicNumber/String  '() is not supported in standby tasks.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.ProcessorContextImpl.setRecordContext@POLYN220582"
}} 
,
{ "ligne" : {
   "c1" : "00335"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorContextImpl.java.html#335"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00335] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorContextImpl.setRecordContext@POLYN220582 the MagicNumber/String 'setRecordContext' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
