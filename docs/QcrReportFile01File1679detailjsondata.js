console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableOuterJoin.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableOuterJoin.java 28 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableOuterJoin.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "KTableKTableAbstractJoin<K,V1,V2,VOut>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.KTableKTableOuterJoin"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.KTableKTableOuterJoin" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "KTableKTableOuterJoin"
 , "c2" : "KTableKTableOuterJoin(KTableImpl<K,?,V1>;KTableImpl<K,?,V2>;ValueJoiner<?superV1,?superV2,?extendsVOut>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Processor<K,Change<V1>,K,Change<VOut>>"
 , "c2" : "get()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KTableValueGetterSupplier<K,VOut>"
 , "c2" : "view()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableOuterJoin.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableOuterJoin.java.svg" }

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
 , "c4" : "20"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
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
   "c1" : "00061"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableOuterJoin.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method init arguments ProcessorContext&lt;K ,Change&lt;VOut &gt; &gt;  context"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableOuterJoin.java.html#61"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00061] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableOuterJoin.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method process arguments Record&lt;K ,Change&lt;V1 &gt; &gt;  record"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableOuterJoin.java.html#72"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00072] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableOuterJoin.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00098] The same method call record.value() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableOuterJoin.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.streams.kstream.internals.KTableKTableOuterJoin.KTableKTableOuterJoinProcessor.process@POLYN172135 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableOuterJoin.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.streams.kstream.internals.KTableKTableOuterJoin.KTableKTableOuterJoinProcessor.process@POLYN172135 the MagicNumber/String  'Skipping record due to null key. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableOuterJoin.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.streams.kstream.internals.KTableKTableOuterJoin.KTableKTableOuterJoinProcessor.process@POLYN172135 the MagicNumber/String  'topic=[{}] partition=[{}] offset=[{}]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableOuterJoin.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.streams.kstream.internals.KTableKTableOuterJoin.KTableKTableOuterJoinProcessor.process@POLYN172135 the MagicNumber/String  'Skipping record due to null key. Topic, partition, and offset not known.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableOuterJoin.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.streams.kstream.internals.KTableKTableOuterJoin.KTableKTableOuterJoinProcessor.process@POLYN172135 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableOuterJoin.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.streams.kstream.internals.KTableKTableOuterJoin.KTableKTableOuterJoinProcessor.process@POLYN172135 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableOuterJoin.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.streams.kstream.internals.KTableKTableOuterJoin.KTableKTableOuterJoinProcessor.process@POLYN172135 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableOuterJoin.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.streams.kstream.internals.KTableKTableOuterJoin.KTableKTableOuterJoinProcessor.process@POLYN172135 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableOuterJoin.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.streams.kstream.internals.KTableKTableOuterJoin.KTableKTableOuterJoinProcessor.process@POLYN172135 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableOuterJoin.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.streams.kstream.internals.KTableKTableOuterJoin.KTableKTableOuterJoinProcessor.process@POLYN172135 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableOuterJoin.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.streams.kstream.internals.KTableKTableOuterJoin.KTableKTableOuterJoinProcessor.process@POLYN172135 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableOuterJoin.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.streams.kstream.internals.KTableKTableOuterJoin.KTableKTableOuterJoinProcessor.process@POLYN172135 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableOuterJoin.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.streams.kstream.internals.KTableKTableOuterJoin.KTableKTableOuterJoinProcessor.process@POLYN172135 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableOuterJoin.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00123] The class KTableKTableOuterJoinValueGetter contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableOuterJoin.java.html#135"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00135] For method init arguments ProcessorContext&lt;? ,? &gt;  context"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableOuterJoin.java.html#141"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00141] For method get arguments K  key"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableOuterJoin.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.streams.kstream.internals.KTableKTableOuterJoin.KTableKTableOuterJoinValueGetter.get@POLYN175667 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableOuterJoin.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.streams.kstream.internals.KTableKTableOuterJoin.KTableKTableOuterJoinValueGetter.get@POLYN175667 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableOuterJoin.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.streams.kstream.internals.KTableKTableOuterJoin.KTableKTableOuterJoinValueGetter.get@POLYN175667 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableOuterJoin.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.streams.kstream.internals.KTableKTableOuterJoin.KTableKTableOuterJoinValueGetter.get@POLYN175667 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableOuterJoin.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.apache.kafka.streams.kstream.internals.KTableKTableOuterJoin.KTableKTableOuterJoinValueGetter.get@POLYN175667 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00166"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableOuterJoin.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method org.apache.kafka.streams.kstream.internals.KTableKTableOuterJoin.KTableKTableOuterJoinValueGetter.get@POLYN175667 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00166"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableOuterJoin.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method org.apache.kafka.streams.kstream.internals.KTableKTableOuterJoin.KTableKTableOuterJoinValueGetter.get@POLYN175667 the MagicNumber/String  null should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
