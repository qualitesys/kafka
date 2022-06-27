console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionTupleForwarder.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionTupleForwarder.java 5 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionTupleForwarder.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.kstream.internals.SessionTupleForwarder"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.SessionTupleForwarder" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "SessionTupleForwarder"
 , "c2" : "SessionTupleForwarder(StateStore;ProcessorContext<Windowed<K>,Change<V>>;CacheFlushListener<Windowed<K>,V>;boolean)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeForward(Record<Windowed<K>,Change<V>>)"
 , "c3" : "2"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionTupleForwarder.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionTupleForwarder.java.svg" }

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
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00012"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionTupleForwarder.java.html#12"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00012] The class SessionTupleForwarder contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionTupleForwarder.java.html#27"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00027] For method maybeForward arguments Record&lt;Windowed&lt;K &gt; ,Change&lt;V &gt; &gt;  record"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionTupleForwarder.java.html#27"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00027] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionTupleForwarder.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method org.apache.kafka.streams.kstream.internals.SessionTupleForwarder.maybeForward@POLYN166039 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionTupleForwarder.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method org.apache.kafka.streams.kstream.internals.SessionTupleForwarder.maybeForward@POLYN166039 the MagicNumber/String  null should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
