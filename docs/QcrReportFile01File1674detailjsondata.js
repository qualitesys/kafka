console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableAbstractJoin.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableAbstractJoin.java 8 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableAbstractJoin.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "KTableProcessorSupplier<K,V1,K,VOut>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.KTableKTableAbstractJoin"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.KTableKTableAbstractJoin" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "KTableKTableAbstractJoin"
 , "c2" : "KTableKTableAbstractJoin(KTableImpl<K,?,V1>;KTableImpl<K,?,V2>;ValueJoiner<?superV1,?superV2,?extendsVOut>)"
 , "c3" : "1"
 , "c4" : "5"
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
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableAbstractJoin.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableAbstractJoin.java.svg" }

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
 , "c4" : "4"
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
   "c1" : "00006"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableAbstractJoin.java.html#6"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00006] The class KTableKTableAbstractJoin contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00017"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableAbstractJoin.java.html#17"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00017] The argument table1 is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00018"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableAbstractJoin.java.html#18"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00018] The argument table2 is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableAbstractJoin.java.html#28"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00028] For method enableSendingOldValues arguments boolean  forceMaterialization"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableAbstractJoin.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method org.apache.kafka.streams.kstream.internals.KTableKTableAbstractJoin.enableSendingOldValues@POLYN167595 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableAbstractJoin.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method org.apache.kafka.streams.kstream.internals.KTableKTableAbstractJoin.enableSendingOldValues@POLYN167595 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableAbstractJoin.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method org.apache.kafka.streams.kstream.internals.KTableKTableAbstractJoin.enableSendingOldValues@POLYN167595 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableKTableAbstractJoin.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method org.apache.kafka.streams.kstream.internals.KTableKTableAbstractJoin.enableSendingOldValues@POLYN167595 the MagicNumber/String  true should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
