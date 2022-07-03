console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WrappedStateStore.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/WrappedStateStore.java 16 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WrappedStateStore.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "StateStore"
 , "c2" : "org.apache.kafka.streams.state.internals.WrappedStateStore"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.WrappedStateStore" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isTimestamped(StateStore)"
 , "c3" : "5"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "WrappedStateStore"
 , "c2" : "WrappedStateStore(S)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "init(ProcessorContext;StateStore)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "init(StateStoreContext;StateStore)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "setFlushListener(CacheFlushListener<K,V>;boolean)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "flushCache()"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "name()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "persistent()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isOpen()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "validateStoreOpen()"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "flush()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Position"
 , "c2" : "getPosition()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "S"
 , "c2" : "wrapped()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WrappedStateStore.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WrappedStateStore.java.svg" }

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
 , "c4" : "1"
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
 , "c4" : "10"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00016"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WrappedStateStore.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00016] The class WrappedStateStore contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00018"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WrappedStateStore.java.html#18"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00018] For method isTimestamped arguments StateStore  stateStore"
}} 
,
{ "ligne" : {
   "c1" : "00020"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WrappedStateStore.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00020] In method org.apache.kafka.streams.state.internals.WrappedStateStore.isTimestamped@POLYN177368 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00024"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WrappedStateStore.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00024] In method org.apache.kafka.streams.state.internals.WrappedStateStore.isTimestamped@POLYN177368 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WrappedStateStore.java.html#36"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00036] For method init arguments ProcessorContext  context|StateStore  root"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WrappedStateStore.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00042] For method init arguments StateStoreContext  context|StateStore  root"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WrappedStateStore.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method setFlushListener arguments CacheFlushListener&lt;K ,V &gt;  listener|boolean  sendOldValues"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WrappedStateStore.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.streams.state.internals.WrappedStateStore.setFlushListener@POLYN178440 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WrappedStateStore.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.streams.state.internals.WrappedStateStore.validateStoreOpen@POLYN179421 the MagicNumber/String  'Store ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WrappedStateStore.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.streams.state.internals.WrappedStateStore.validateStoreOpen@POLYN179421 the MagicNumber/String  ' is currently closed.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WrappedStateStore.java.html#97"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00097] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WrappedStateStore.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.streams.state.internals.WrappedStateStore the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WrappedStateStore.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.streams.state.internals.WrappedStateStore the MagicNumber/String  'Handled in ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WrappedStateStore.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.streams.state.internals.WrappedStateStore the MagicNumber/String  ' via WrappedStateStore' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WrappedStateStore.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.streams.state.internals.WrappedStateStore the MagicNumber/String  ' in ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WrappedStateStore.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.streams.state.internals.WrappedStateStore the MagicNumber/String  'ns' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
