console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java 47 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractDualSchemaRocksDBSegmentedBytesStore<KeyValueSegment>"
 , "c2" : "org.apache.kafka.streams.state.internals.AbstractRocksDBTimeOrderedSegmentedBytesStore"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.AbstractRocksDBTimeOrderedSegmentedBytesStore" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "AbstractRocksDBTimeOrderedSegmentedBytesStore"
 , "c2" : "AbstractRocksDBTimeOrderedSegmentedBytesStore(String;String;long;long;KeySchema;Optional<KeySchema>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Bytes,byte[]>"
 , "c2" : "fetch(Bytes;long;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Bytes,byte[]>"
 , "c2" : "backwardFetch(Bytes;long;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "IndexToBaseStoreIterator"
 , "c2" : "getIndexToBaseStoreIterator(SegmentIterator<KeyValueSegment>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Bytes,byte[]>"
 , "c2" : "fetch(Bytes;long;long;boolean)"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Bytes,byte[]>"
 , "c2" : "fetch(Bytes;Bytes;long;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Bytes,byte[]>"
 , "c2" : "backwardFetch(Bytes;Bytes;long;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Bytes,byte[]>"
 , "c2" : "fetch(Bytes;Bytes;long;long;boolean)"
 , "c3" : "3"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "remove(Bytes;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Bytes,byte[]>"
 , "c2" : "fetchAll(long;long)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Bytes,byte[]>"
 , "c2" : "backwardFetchAll(long;long)"
 , "c3" : "1"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.svg" }

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
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
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
 , "c4" : "31"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "11"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00017"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#17"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00017] The class IndexToBaseStoreIterator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00042] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00043] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.streams.state.internals.AbstractRocksDBTimeOrderedSegmentedBytesStore.IndexToBaseStoreIterator.hasNext@POLYN202710 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.streams.state.internals.AbstractRocksDBTimeOrderedSegmentedBytesStore.IndexToBaseStoreIterator.hasNext@POLYN202710 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.streams.state.internals.AbstractRocksDBTimeOrderedSegmentedBytesStore.IndexToBaseStoreIterator.hasNext@POLYN202710 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.streams.state.internals.AbstractRocksDBTimeOrderedSegmentedBytesStore.IndexToBaseStoreIterator.next@POLYN203446 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.streams.state.internals.AbstractRocksDBTimeOrderedSegmentedBytesStore.IndexToBaseStoreIterator.next@POLYN203446 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00068] For method getBaseKey arguments Bytes  indexKey"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#82"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00082] For method fetch arguments Bytes  key|long  from|long  to"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.streams.state.internals.AbstractRocksDBTimeOrderedSegmentedBytesStore.fetch@POLYN204632 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#89"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00089] For method backwardFetch arguments Bytes  key|long  from|long  to"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.streams.state.internals.AbstractRocksDBTimeOrderedSegmentedBytesStore.backwardFetch@POLYN204955 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#95"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00095] For method getIndexToBaseStoreIterator arguments SegmentIterator&lt;KeyValueSegment &gt;  segmentIterator"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#97"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00097] For method fetch arguments Bytes  key|long  from|long  to|boolean  forward"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#97"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00097] For method fetch list of called methods Object monObjet|KeyValueIterator&lt;Bytes,byte[]&gt; indexKeySchema_getN205818|KeyValueIterator&lt;Bytes,byte[]&gt; indexKeySchema_getN205959"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#131"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00131] For method fetch arguments Bytes  keyFrom|Bytes  keyTo|long  from|long  to"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.streams.state.internals.AbstractRocksDBTimeOrderedSegmentedBytesStore.fetch@POLYN207244 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#139"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00139] For method backwardFetch arguments Bytes  keyFrom|Bytes  keyTo|long  from|long  to"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.streams.state.internals.AbstractRocksDBTimeOrderedSegmentedBytesStore.backwardFetch@POLYN207617 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#146"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00146] For method fetch arguments Bytes  keyFrom|Bytes  keyTo|long  from|long  to|boolean  forward"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#146"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00146] For method fetch list of called methods Object monObjet|KeyValueIterator&lt;Bytes,byte[]&gt; indexKeySchema_getN208868|KeyValueIterator&lt;Bytes,byte[]&gt; indexKeySchema_getN209009"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.streams.state.internals.AbstractRocksDBTimeOrderedSegmentedBytesStore.fetch@POLYN207971 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.streams.state.internals.AbstractRocksDBTimeOrderedSegmentedBytesStore.fetch@POLYN207971 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.streams.state.internals.AbstractRocksDBTimeOrderedSegmentedBytesStore.fetch@POLYN207971 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.streams.state.internals.AbstractRocksDBTimeOrderedSegmentedBytesStore.fetch@POLYN207971 the MagicNumber/String  'Returning empty iterator for fetch with invalid key range: from &amp;gt; to. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.streams.state.internals.AbstractRocksDBTimeOrderedSegmentedBytesStore.fetch@POLYN207971 the MagicNumber/String  'This may be due to range arguments set in the wrong order, ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00154"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.streams.state.internals.AbstractRocksDBTimeOrderedSegmentedBytesStore.fetch@POLYN207971 the MagicNumber/String  'or serdes that don't preserve ordering when lexicographically comparing the serialized bytes. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.streams.state.internals.AbstractRocksDBTimeOrderedSegmentedBytesStore.fetch@POLYN207971 the MagicNumber/String  'Note that the built-in numerical serdes do not follow this for negative numbers' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#190"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00190] For method remove arguments Bytes  key|long  timestamp"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.streams.state.internals.AbstractRocksDBTimeOrderedSegmentedBytesStore.remove@POLYN210243 the MagicNumber/String  'Not supported operation' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#195"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00195] For method fetchAll arguments long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.streams.state.internals.AbstractRocksDBTimeOrderedSegmentedBytesStore.fetchAll@POLYN210475 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.streams.state.internals.AbstractRocksDBTimeOrderedSegmentedBytesStore.fetchAll@POLYN210475 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.streams.state.internals.AbstractRocksDBTimeOrderedSegmentedBytesStore.fetchAll@POLYN210475 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00203"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method org.apache.kafka.streams.state.internals.AbstractRocksDBTimeOrderedSegmentedBytesStore.fetchAll@POLYN210475 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00203"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method org.apache.kafka.streams.state.internals.AbstractRocksDBTimeOrderedSegmentedBytesStore.fetchAll@POLYN210475 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00203"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method org.apache.kafka.streams.state.internals.AbstractRocksDBTimeOrderedSegmentedBytesStore.fetchAll@POLYN210475 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00206"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method org.apache.kafka.streams.state.internals.AbstractRocksDBTimeOrderedSegmentedBytesStore.fetchAll@POLYN210475 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00210"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#210"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00210] For method backwardFetchAll arguments long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {
   "c1" : "00212"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method org.apache.kafka.streams.state.internals.AbstractRocksDBTimeOrderedSegmentedBytesStore.backwardFetchAll@POLYN211374 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00213"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#213"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00213] In method org.apache.kafka.streams.state.internals.AbstractRocksDBTimeOrderedSegmentedBytesStore.backwardFetchAll@POLYN211374 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00214"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.streams.state.internals.AbstractRocksDBTimeOrderedSegmentedBytesStore.backwardFetchAll@POLYN211374 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00218] In method org.apache.kafka.streams.state.internals.AbstractRocksDBTimeOrderedSegmentedBytesStore.backwardFetchAll@POLYN211374 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00218] In method org.apache.kafka.streams.state.internals.AbstractRocksDBTimeOrderedSegmentedBytesStore.backwardFetchAll@POLYN211374 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00218] In method org.apache.kafka.streams.state.internals.AbstractRocksDBTimeOrderedSegmentedBytesStore.backwardFetchAll@POLYN211374 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBTimeOrderedSegmentedBytesStore.java.html#221"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00221] In method org.apache.kafka.streams.state.internals.AbstractRocksDBTimeOrderedSegmentedBytesStore.backwardFetchAll@POLYN211374 the MagicNumber/String  false should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
