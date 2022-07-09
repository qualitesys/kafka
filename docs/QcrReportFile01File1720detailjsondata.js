console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/WrappingNullableSerde.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/WrappingNullableSerde.java 5 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/WrappingNullableSerde.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Serde<T>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.WrappingNullableSerde"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.WrappingNullableSerde" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "WrappingNullableSerde"
 , "c2" : "WrappingNullableSerde(WrappingNullableSerializer<T,InnerK,InnerV>;WrappingNullableDeserializer<T,InnerK,InnerV>)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "Serializer<T>"
 , "c2" : "serializer()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Deserializer<T>"
 , "c2" : "deserializer()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "configure(Map<String,?>;boolean)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setIfUnset(SerdeGetter)"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/WrappingNullableSerde.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/WrappingNullableSerde.java.svg" }

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
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00013"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/WrappingNullableSerde.java.html#13"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00013] The class WrappingNullableSerde contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00019"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/WrappingNullableSerde.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00019] In method org.apache.kafka.streams.kstream.internals.WrappingNullableSerde.WrappingNullableSerde@POLYN147314 the MagicNumber/String  'serializer can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00020"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/WrappingNullableSerde.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00020] In method org.apache.kafka.streams.kstream.internals.WrappingNullableSerde.WrappingNullableSerde@POLYN147314 the MagicNumber/String  'deserializer can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/WrappingNullableSerde.java.html#36"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00036] For method configure arguments Map&lt;String ,? &gt;  configs|boolean  isKey"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/WrappingNullableSerde.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method setIfUnset arguments SerdeGetter  getter"
}} 
]
};
console.log('leListeStr 99 main end');
