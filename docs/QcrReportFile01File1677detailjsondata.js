console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableJoinMerger.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableJoinMerger.java 16 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableJoinMerger.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "KTableProcessorSupplier<K,V,K,V>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.KTableKTableJoinMerger"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.KTableKTableJoinMerger" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "KTableKTableJoinMerger"
 , "c2" : "KTableKTableJoinMerger(KTableProcessorSupplier<K,?,K,V>;KTableProcessorSupplier<K,?,K,V>;String)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "getQueryableName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Processor<K,Change<V>,K,Change<V>>"
 , "c2" : "get()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KTableValueGetterSupplier<K,V>"
 , "c2" : "view()"
 , "c3" : "3"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "enableSendingOldValues(boolean)"
 , "c3" : "1"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableJoinMerger.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableJoinMerger.java.svg" }

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
 , "c4" : "2"
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
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00015"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableJoinMerger.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00015] The class KTableKTableJoinMerger contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableJoinMerger.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.streams.kstream.internals.KTableKTableJoinMerger.view@POLYN177359 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableJoinMerger.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.streams.kstream.internals.KTableKTableJoinMerger.view@POLYN177359 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableJoinMerger.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method enableSendingOldValues arguments boolean  forceMaterialization"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableJoinMerger.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.streams.kstream.internals.KTableKTableJoinMerger.enableSendingOldValues@POLYN178606 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableJoinMerger.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.streams.kstream.internals.KTableKTableJoinMerger.enableSendingOldValues@POLYN178606 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableJoinMerger.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.streams.kstream.internals.KTableKTableJoinMerger.enableSendingOldValues@POLYN178606 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableJoinMerger.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.streams.kstream.internals.KTableKTableJoinMerger.enableSendingOldValues@POLYN178606 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableJoinMerger.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.streams.kstream.internals.KTableKTableJoinMerger the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableJoinMerger.java.html#91"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00091] For method init arguments ProcessorContext&lt;K ,Change&lt;V &gt; &gt;  context"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableJoinMerger.java.html#91"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00091] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableJoinMerger.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.streams.kstream.internals.KTableKTableJoinMerger.KTableKTableJoinMergeProcessor.init@POLYN180142 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableJoinMerger.java.html#104"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00104] For method process arguments Record&lt;K ,Change&lt;V &gt; &gt;  record"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableJoinMerger.java.html#104"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00104] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableJoinMerger.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.streams.kstream.internals.KTableKTableJoinMerger.KTableKTableJoinMergeProcessor.process@POLYN180790 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableJoinMerger.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.streams.kstream.internals.KTableKTableJoinMerger.KTableKTableJoinMergeProcessor.process@POLYN180790 the MagicNumber/String  null should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
