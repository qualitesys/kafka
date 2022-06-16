console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java 452 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.xml" 
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
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "32"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "27"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "14"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "12"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "303"
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
 , "c4" : "63"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00025] The class ConfigDef contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.common.config.ConfigDef.ConfigDef@POLYN452388 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#42"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00042] The argument base is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.common.config.ConfigDef.ConfigDef@POLYN452648 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#64"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00064] For method define arguments ConfigKey  key"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#64"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00064] The argument key is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.common.config.ConfigDef.define@POLYN453788 the MagicNumber/String  'Configuration ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.common.config.ConfigDef.define@POLYN453788 the MagicNumber/String  ' is defined twice.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.common.config.ConfigDef.define@POLYN453788 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#76"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00076] For method define arguments String  name|Type  type|Object  defaultValue|Validator  validator|Importance  importance|String  documentation|String  group|int  orderInGroup|Width  width|String  displayName|List&lt;String &gt;  dependents|Recommender  recommender"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.common.config.ConfigDef.define@POLYN454965 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#82"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00082] For method define arguments String  name|Type  type|Object  defaultValue|Validator  validator|Importance  importance|String  documentation|String  group|int  orderInGroup|Width  width|String  displayName|List&lt;String &gt;  dependents"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.common.config.ConfigDef.define@POLYN456174 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#88"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00088] For method define arguments String  name|Type  type|Object  defaultValue|Validator  validator|Importance  importance|String  documentation|String  group|int  orderInGroup|Width  width|String  displayName|Recommender  recommender"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#94"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00094] For method define arguments String  name|Type  type|Object  defaultValue|Validator  validator|Importance  importance|String  documentation|String  group|int  orderInGroup|Width  width|String  displayName"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#100"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00100] For method define arguments String  name|Type  type|Object  defaultValue|Importance  importance|String  documentation|String  group|int  orderInGroup|Width  width|String  displayName|List&lt;String &gt;  dependents|Recommender  recommender"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.common.config.ConfigDef.define@POLYN459491 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#106"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00106] For method define arguments String  name|Type  type|Object  defaultValue|Importance  importance|String  documentation|String  group|int  orderInGroup|Width  width|String  displayName|List&lt;String &gt;  dependents"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.common.config.ConfigDef.define@POLYN460582 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.common.config.ConfigDef.define@POLYN460582 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#112"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00112] For method define arguments String  name|Type  type|Object  defaultValue|Importance  importance|String  documentation|String  group|int  orderInGroup|Width  width|String  displayName|Recommender  recommender"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.common.config.ConfigDef.define@POLYN461656 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#118"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00118] For method define arguments String  name|Type  type|Object  defaultValue|Importance  importance|String  documentation|String  group|int  orderInGroup|Width  width|String  displayName"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.common.config.ConfigDef.define@POLYN462691 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#124"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00124] For method define arguments String  name|Type  type|Importance  importance|String  documentation|String  group|int  orderInGroup|Width  width|String  displayName|List&lt;String &gt;  dependents|Recommender  recommender"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.common.config.ConfigDef.define@POLYN463731 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#130"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00130] For method define arguments String  name|Type  type|Importance  importance|String  documentation|String  group|int  orderInGroup|Width  width|String  displayName|List&lt;String &gt;  dependents"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.common.config.ConfigDef.define@POLYN464761 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.common.config.ConfigDef.define@POLYN464761 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#136"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00136] For method define arguments String  name|Type  type|Importance  importance|String  documentation|String  group|int  orderInGroup|Width  width|String  displayName|Recommender  recommender"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.common.config.ConfigDef.define@POLYN465774 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#142"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00142] For method define arguments String  name|Type  type|Importance  importance|String  documentation|String  group|int  orderInGroup|Width  width|String  displayName"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.common.config.ConfigDef.define@POLYN466748 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#148"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00148] For method define arguments String  name|Type  type|Object  defaultValue|Validator  validator|Importance  importance|String  documentation"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method org.apache.kafka.common.config.ConfigDef.define@POLYN467682 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method org.apache.kafka.common.config.ConfigDef.define@POLYN467682 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#153"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00153] For method define arguments String  name|Type  type|Object  defaultValue|Importance  importance|String  documentation"
}} 
,
{ "ligne" : {
   "c1" : "00154"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.common.config.ConfigDef.define@POLYN468452 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#158"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00158] For method define arguments String  name|Type  type|Importance  importance|String  documentation"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.apache.kafka.common.config.ConfigDef.define@POLYN469054 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#163"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00163] For method defineInternal arguments String  name|Type  type|Object  defaultValue|Importance  importance"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.common.config.ConfigDef.defineInternal@POLYN469697 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.common.config.ConfigDef.defineInternal@POLYN469697 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.common.config.ConfigDef.defineInternal@POLYN469697 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.common.config.ConfigDef.defineInternal@POLYN469697 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.common.config.ConfigDef.defineInternal@POLYN469697 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.common.config.ConfigDef.defineInternal@POLYN469697 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#168"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00168] For method defineInternal arguments String  name|Type  type|Object  defaultValue|Validator  validator|Importance  importance|String  documentation"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.common.config.ConfigDef.defineInternal@POLYN470697 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.common.config.ConfigDef.defineInternal@POLYN470697 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.common.config.ConfigDef.defineInternal@POLYN470697 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.common.config.ConfigDef.defineInternal@POLYN470697 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#195"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00195] For method parse arguments Map&lt;? ,? &gt;  props"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#195"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00195] The argument props is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.common.config.ConfigDef.parse@POLYN472573 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.common.config.ConfigDef.parse@POLYN472573 the MagicNumber/String  'Some configurations in are referred in the dependents, but not defined: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00209"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#209"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00209] For method parseValue arguments ConfigKey  key|Object  value|boolean  isSet"
}} 
,
{ "ligne" : {
   "c1" : "00209"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#209"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00209] The argument key is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00209"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#209"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00209] The argument value is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00215"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method org.apache.kafka.common.config.ConfigDef.parseValue@POLYN473553 the MagicNumber/String  'Missing required configuration \'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00215"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method org.apache.kafka.common.config.ConfigDef.parseValue@POLYN473553 the MagicNumber/String  '\' which has no default value.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00220"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#220"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00220] In method org.apache.kafka.common.config.ConfigDef.parseValue@POLYN473553 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00227"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#227"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00227] For method validate arguments Map&lt;String ,String &gt;  props"
}} 
,
{ "ligne" : {
   "c1" : "00231"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#231"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00231] For method validateAll arguments Map&lt;String ,String &gt;  props"
}} 
,
{ "ligne" : {
   "c1" : "00239"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#239"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00239] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00240"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#240"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00240] In method org.apache.kafka.common.config.ConfigDef.validateAll@POLYN474882 the MagicNumber/String  ' is referred in the dependents, but not defined.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00241"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00241] In method org.apache.kafka.common.config.ConfigDef.validateAll@POLYN474882 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00250"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#250"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00250] For method parseForValidate arguments Map&lt;String ,String &gt;  props|Map&lt;String ,ConfigValue &gt;  configValues"
}} 
,
{ "ligne" : {
   "c1" : "00260"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#260"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00260] For method validate arguments Map&lt;String ,Object &gt;  parsed|Map&lt;String ,ConfigValue &gt;  configValues"
}} 
,
{ "ligne" : {
   "c1" : "00271"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00271] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00288"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00288] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00282"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#282"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00282] In method org.apache.kafka.common.config.ConfigDef.getConfigsWithNoParent@POLYN477892 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00298"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#298"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00298] For method parseForValidate arguments String  name|Map&lt;String ,String &gt;  props|Map&lt;String ,Object &gt;  parsed|Map&lt;String ,ConfigValue &gt;  configs"
}} 
,
{ "ligne" : {
   "c1" : "00298"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#298"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00298] The argument props is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00298"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#298"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00298] The argument parsed is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00298"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#298"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00298] The argument configs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00305"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00305] In method org.apache.kafka.common.config.ConfigDef.parseForValidate@POLYN478735 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00313"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#313"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00313] In method org.apache.kafka.common.config.ConfigDef.parseForValidate@POLYN478735 the MagicNumber/String  'Missing required configuration \'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00313"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#313"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00313] In method org.apache.kafka.common.config.ConfigDef.parseForValidate@POLYN478735 the MagicNumber/String  '\' which has no default value.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00318"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#318"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00318] In method org.apache.kafka.common.config.ConfigDef.parseForValidate@POLYN478735 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00332"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#332"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00332] For method validate arguments String  name|Map&lt;String ,Object &gt;  parsed|Map&lt;String ,ConfigValue &gt;  configs"
}} 
,
{ "ligne" : {
   "c1" : "00332"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#332"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00332] The argument configs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00338"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#338"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00338] In method org.apache.kafka.common.config.ConfigDef.validate@POLYN480827 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00360"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#360"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00360] For method parseType arguments String  name|Object  value|Type  type"
}} 
,
{ "ligne" : {
   "c1" : "00360"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#360"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00360] The argument name is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00360"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#360"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00360] The argument type is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00362"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#362"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00362] In method org.apache.kafka.common.config.ConfigDef.parseType@POLYN482789 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00362"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#362"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00362] In method org.apache.kafka.common.config.ConfigDef.parseType@POLYN482789 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00364"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#364"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00364] In method org.apache.kafka.common.config.ConfigDef.parseType@POLYN482789 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00371"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#371"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00371] In method org.apache.kafka.common.config.ConfigDef.parseType@POLYN482789 the MagicNumber/String  'true' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00372"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#372"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00372] In method org.apache.kafka.common.config.ConfigDef.parseType@POLYN482789 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00373"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#373"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00373] In method org.apache.kafka.common.config.ConfigDef.parseType@POLYN482789 the MagicNumber/String  'false' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00374"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#374"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00374] In method org.apache.kafka.common.config.ConfigDef.parseType@POLYN482789 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00376"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#376"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00376] In method org.apache.kafka.common.config.ConfigDef.parseType@POLYN482789 the MagicNumber/String  'Expected value to be either true or false' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00380"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#380"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00380] In method org.apache.kafka.common.config.ConfigDef.parseType@POLYN482789 the MagicNumber/String  'Expected value to be either true or false' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00387"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#387"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00387] In method org.apache.kafka.common.config.ConfigDef.parseType@POLYN482789 the MagicNumber/String  'Expected value to be a string, but it was a ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00392"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#392"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00392] In method org.apache.kafka.common.config.ConfigDef.parseType@POLYN482789 the MagicNumber/String  'Expected value to be a string, but it was a ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00399"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#399"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00399] In method org.apache.kafka.common.config.ConfigDef.parseType@POLYN482789 the MagicNumber/String  'Expected value to be a 32-bit integer, but it was a ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00407"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#407"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00407] In method org.apache.kafka.common.config.ConfigDef.parseType@POLYN482789 the MagicNumber/String  'Expected value to be a 16-bit integer (short), but it was a ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00417"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#417"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00417] In method org.apache.kafka.common.config.ConfigDef.parseType@POLYN482789 the MagicNumber/String  'Expected value to be a 64-bit integer (long), but it was a ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00424"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#424"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00424] In method org.apache.kafka.common.config.ConfigDef.parseType@POLYN482789 the MagicNumber/String  'Expected value to be a double, but it was a ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00432"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#432"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00432] In method org.apache.kafka.common.config.ConfigDef.parseType@POLYN482789 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00434"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#434"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00434] In method org.apache.kafka.common.config.ConfigDef.parseType@POLYN482789 the MagicNumber/String  'Expected a comma separated list.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00446"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#446"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00446] In method org.apache.kafka.common.config.ConfigDef.parseType@POLYN482789 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00448"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#448"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00448] In method org.apache.kafka.common.config.ConfigDef.parseType@POLYN482789 the MagicNumber/String  'Expected a Class instance or class name.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00450"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#450"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00450] In method org.apache.kafka.common.config.ConfigDef.parseType@POLYN482789 the MagicNumber/String  'Unknown type.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00453"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#453"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00453] In method org.apache.kafka.common.config.ConfigDef.parseType@POLYN482789 the MagicNumber/String  'Not a number of type ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00455"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#455"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00455] In method org.apache.kafka.common.config.ConfigDef.parseType@POLYN482789 the MagicNumber/String  'Class ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00455"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#455"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00455] In method org.apache.kafka.common.config.ConfigDef.parseType@POLYN482789 the MagicNumber/String  ' could not be found.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00459"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#459"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00459] For method convertToString arguments Object  parsedValue|Type  type"
}} 
,
{ "ligne" : {
   "c1" : "00460"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#460"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00460] In method org.apache.kafka.common.config.ConfigDef.convertToString@POLYN488269 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00461"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#461"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00461] In method org.apache.kafka.common.config.ConfigDef.convertToString@POLYN488269 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00464"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#464"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00464] In method org.apache.kafka.common.config.ConfigDef.convertToString@POLYN488269 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00479"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#479"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00479] In method org.apache.kafka.common.config.ConfigDef.convertToString@POLYN488269 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00484"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#484"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00484] In method org.apache.kafka.common.config.ConfigDef.convertToString@POLYN488269 the MagicNumber/String  'Unknown type.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00489"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#489"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00489] For method convertToStringMapWithPasswordValues arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {
   "c1" : "00489"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#489"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00489] The argument configs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00492"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#492"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00492] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00493"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#493"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00493] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00494"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#494"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00494] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00495"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#495"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00495] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00496"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#496"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00496] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00498"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#498"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00498] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00501"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#501"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00501] In method org.apache.kafka.common.config.ConfigDef.convertToStringMapWithPasswordValues@POLYN489700 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00502"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#502"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00502] In method org.apache.kafka.common.config.ConfigDef.convertToStringMapWithPasswordValues@POLYN489700 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00544"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#544"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00544] The class Range contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00555"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#555"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00555] For method atLeast arguments Number  min"
}} 
,
{ "ligne" : {
   "c1" : "00556"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#556"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00556] In method org.apache.kafka.common.config.ConfigDef.Range.atLeast@POLYN493192 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00560"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#560"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00560] For method between arguments Number  min|Number  max"
}} 
,
{ "ligne" : {
   "c1" : "00564"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#564"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00564] For method ensureValid arguments String  name|Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00568"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#568"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00568] The same method call min.doubleValue() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00565"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#565"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00565] In method org.apache.kafka.common.config.ConfigDef.Range.ensureValid@POLYN493614 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00566"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#566"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00566] In method org.apache.kafka.common.config.ConfigDef.Range.ensureValid@POLYN493614 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00566"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#566"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00566] In method org.apache.kafka.common.config.ConfigDef.Range.ensureValid@POLYN493614 the MagicNumber/String  'Value must be non-null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00568"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#568"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00568] In method org.apache.kafka.common.config.ConfigDef.Range.ensureValid@POLYN493614 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00569"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#569"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00569] In method org.apache.kafka.common.config.ConfigDef.Range.ensureValid@POLYN493614 the MagicNumber/String  'Value must be at least ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00570"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#570"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00570] In method org.apache.kafka.common.config.ConfigDef.Range.ensureValid@POLYN493614 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00571"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#571"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00571] In method org.apache.kafka.common.config.ConfigDef.Range.ensureValid@POLYN493614 the MagicNumber/String  'Value must be no more than ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00575"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#575"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00575] In method org.apache.kafka.common.config.ConfigDef.Range.toString@POLYN494523 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00575"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#575"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00575] In method org.apache.kafka.common.config.ConfigDef.Range.toString@POLYN494523 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00576"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#576"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00576] In method org.apache.kafka.common.config.ConfigDef.Range.toString@POLYN494523 the MagicNumber/String  '[...]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00577"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#577"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00577] In method org.apache.kafka.common.config.ConfigDef.Range.toString@POLYN494523 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00578"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#578"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00578] In method org.apache.kafka.common.config.ConfigDef.Range.toString@POLYN494523 the MagicNumber/String  '[...,' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00578"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#578"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00578] In method org.apache.kafka.common.config.ConfigDef.Range.toString@POLYN494523 the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00579"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#579"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00579] In method org.apache.kafka.common.config.ConfigDef.Range.toString@POLYN494523 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00580"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#580"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00580] In method org.apache.kafka.common.config.ConfigDef.Range.toString@POLYN494523 the MagicNumber/String  '[' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00580"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#580"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00580] In method org.apache.kafka.common.config.ConfigDef.Range.toString@POLYN494523 the MagicNumber/String  ',...]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00582"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#582"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00582] In method org.apache.kafka.common.config.ConfigDef.Range.toString@POLYN494523 the MagicNumber/String  '[' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00582"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#582"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00582] In method org.apache.kafka.common.config.ConfigDef.Range.toString@POLYN494523 the MagicNumber/String  ',...,' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00582"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#582"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00582] In method org.apache.kafka.common.config.ConfigDef.Range.toString@POLYN494523 the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00586"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#586"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00586] The class ValidList contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00594"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#594"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00594] For method in arguments String  ...validStrings"
}} 
,
{ "ligne" : {
   "c1" : "00599"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#599"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00599] For method ensureValid arguments String  name|Object  value"
}} 
,
{ "ligne" : {
   "c1" : "00600"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#600"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00600] In method org.apache.kafka.common.config.ConfigDef.ValidList.ensureValid@POLYN495591 the MagicNumber/String  'unchecked' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00612"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#612"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00612] The class ValidString contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00619"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#619"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00619] For method in arguments String  ...validStrings"
}} 
,
{ "ligne" : {
   "c1" : "00624"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#624"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00624] For method ensureValid arguments String  name|Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00627"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#627"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00627] In method org.apache.kafka.common.config.ConfigDef.ValidString.ensureValid@POLYN496589 the MagicNumber/String  'String must be one of: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00627"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#627"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00627] In method org.apache.kafka.common.config.ConfigDef.ValidString.ensureValid@POLYN496589 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00633"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#633"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00633] In method org.apache.kafka.common.config.ConfigDef.ValidString.toString@POLYN497061 the MagicNumber/String  '[' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00633"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#633"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00633] In method org.apache.kafka.common.config.ConfigDef.ValidString.toString@POLYN497061 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00633"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#633"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00633] In method org.apache.kafka.common.config.ConfigDef.ValidString.toString@POLYN497061 the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00637"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#637"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00637] The class CaseInsensitiveValidString contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00641"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#641"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00641] The argument validStrings is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00647"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#647"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00647] For method in arguments String  ...validStrings"
}} 
,
{ "ligne" : {
   "c1" : "00652"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#652"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00652] For method ensureValid arguments String  name|Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00654"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#654"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00654] In method org.apache.kafka.common.config.ConfigDef.CaseInsensitiveValidString.ensureValid@POLYN497898 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00655"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#655"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00655] In method org.apache.kafka.common.config.ConfigDef.CaseInsensitiveValidString.ensureValid@POLYN497898 the MagicNumber/String  'String must be one of (case insensitive): ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00655"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#655"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00655] In method org.apache.kafka.common.config.ConfigDef.CaseInsensitiveValidString.ensureValid@POLYN497898 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00660"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#660"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00660] In method org.apache.kafka.common.config.ConfigDef.CaseInsensitiveValidString.toString@POLYN498463 the MagicNumber/String  '(case insensitive) [' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00660"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#660"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00660] In method org.apache.kafka.common.config.ConfigDef.CaseInsensitiveValidString.toString@POLYN498463 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00660"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#660"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00660] In method org.apache.kafka.common.config.ConfigDef.CaseInsensitiveValidString.toString@POLYN498463 the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00664"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#664"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00664] The class NonNullValidator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00666"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#666"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00666] For method ensureValid arguments String  name|Object  value"
}} 
,
{ "ligne" : {
   "c1" : "00667"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#667"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00667] In method org.apache.kafka.common.config.ConfigDef.NonNullValidator.ensureValid@POLYN498720 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00669"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#669"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00669] In method org.apache.kafka.common.config.ConfigDef.NonNullValidator.ensureValid@POLYN498720 the MagicNumber/String  'null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00669"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#669"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00669] In method org.apache.kafka.common.config.ConfigDef.NonNullValidator.ensureValid@POLYN498720 the MagicNumber/String  'entry must be non null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00674"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#674"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00674] In method org.apache.kafka.common.config.ConfigDef.NonNullValidator.toString@POLYN499011 the MagicNumber/String  'non-null string' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00678"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#678"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00678] The class LambdaValidator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00688"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#688"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00688] For method with arguments BiConsumer&lt;String ,Object &gt;  ensureValid|Supplier&lt;String &gt;  toStringFunction"
}} 
,
{ "ligne" : {
   "c1" : "00694"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#694"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00694] For method ensureValid arguments String  name|Object  value"
}} 
,
{ "ligne" : {
   "c1" : "00704"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#704"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00704] The class CompositeValidator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00711"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#711"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00711] For method of arguments Validator  ...validators"
}} 
,
{ "ligne" : {
   "c1" : "00716"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#716"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00716] For method ensureValid arguments String  name|Object  value"
}} 
,
{ "ligne" : {
   "c1" : "00724"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#724"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00724] In method org.apache.kafka.common.config.ConfigDef.CompositeValidator.toString@POLYN500906 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00724"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#724"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00724] In method org.apache.kafka.common.config.ConfigDef.CompositeValidator.toString@POLYN500906 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00727"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#727"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00727] In method org.apache.kafka.common.config.ConfigDef.CompositeValidator.toString@POLYN500906 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00728"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#728"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00728] In method org.apache.kafka.common.config.ConfigDef.CompositeValidator.toString@POLYN500906 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00728"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#728"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00728] In method org.apache.kafka.common.config.ConfigDef.CompositeValidator.toString@POLYN500906 the MagicNumber/String  ' ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00736"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#736"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00736] The class NonEmptyString contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00739"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#739"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00739] For method ensureValid arguments String  name|Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00741"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#741"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00741] In method org.apache.kafka.common.config.ConfigDef.NonEmptyString.ensureValid@POLYN501597 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00742"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#742"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00742] In method org.apache.kafka.common.config.ConfigDef.NonEmptyString.ensureValid@POLYN501597 the MagicNumber/String  'String must be non-empty' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00748"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#748"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00748] In method org.apache.kafka.common.config.ConfigDef.NonEmptyString.toString@POLYN502016 the MagicNumber/String  'non-empty string' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00752"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#752"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00752] The class NonEmptyStringWithoutControlChars contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00759"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#759"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00759] For method ensureValid arguments String  name|Object  value"
}} 
,
{ "ligne" : {
   "c1" : "00762"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#762"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00762] In method org.apache.kafka.common.config.ConfigDef.NonEmptyStringWithoutControlChars.ensureValid@POLYN502274 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00768"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#768"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00768] In method org.apache.kafka.common.config.ConfigDef.NonEmptyStringWithoutControlChars.ensureValid@POLYN502274 the MagicNumber/String  'String may not be empty' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00774"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#774"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00774] In method org.apache.kafka.common.config.ConfigDef.NonEmptyStringWithoutControlChars.ensureValid@POLYN502274 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00781"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#781"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00781] In method org.apache.kafka.common.config.ConfigDef.NonEmptyStringWithoutControlChars.ensureValid@POLYN502274 the MagicNumber/String  'String may not contain control sequences but had the following ASCII chars: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00781"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#781"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00781] In method org.apache.kafka.common.config.ConfigDef.NonEmptyStringWithoutControlChars.ensureValid@POLYN502274 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00786"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#786"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00786] In method org.apache.kafka.common.config.ConfigDef.NonEmptyStringWithoutControlChars.toString@POLYN503532 the MagicNumber/String  'non-empty string without ISO control characters' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00790"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#790"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00790] The class ListSize contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00797"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#797"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00797] For method atMostOfSize arguments int  maxSize"
}} 
,
{ "ligne" : {
   "c1" : "00802"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#802"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00802] For method ensureValid arguments String  name|Object  value"
}} 
,
{ "ligne" : {
   "c1" : "00803"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#803"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00803] In method org.apache.kafka.common.config.ConfigDef.ListSize.ensureValid@POLYN504001 the MagicNumber/String  'unchecked' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00806"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#806"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00806] In method org.apache.kafka.common.config.ConfigDef.ListSize.ensureValid@POLYN504001 the MagicNumber/String  'exceeds maximum list size of [' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00806"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#806"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00806] In method org.apache.kafka.common.config.ConfigDef.ListSize.ensureValid@POLYN504001 the MagicNumber/String  '].' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00812"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#812"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00812] In method org.apache.kafka.common.config.ConfigDef.ListSize.toString@POLYN504535 the MagicNumber/String  'List containing maximum of ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00812"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#812"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00812] In method org.apache.kafka.common.config.ConfigDef.ListSize.toString@POLYN504535 the MagicNumber/String  ' elements' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00816"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#816"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00816] The class ConfigKey contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00841"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#841"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00841] In method org.apache.kafka.common.config.ConfigDef.ConfigKey.ConfigKey@POLYN505304 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00863"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#863"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00863] In method org.apache.kafka.common.config.ConfigDef.headers@POLYN507155 the MagicNumber/String  'Name' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00863"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#863"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00863] In method org.apache.kafka.common.config.ConfigDef.headers@POLYN507155 the MagicNumber/String  'Description' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00863"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#863"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00863] In method org.apache.kafka.common.config.ConfigDef.headers@POLYN507155 the MagicNumber/String  'Type' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00863"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#863"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00863] In method org.apache.kafka.common.config.ConfigDef.headers@POLYN507155 the MagicNumber/String  'Default' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00863"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#863"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00863] In method org.apache.kafka.common.config.ConfigDef.headers@POLYN507155 the MagicNumber/String  'Valid Values' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00863"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#863"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00863] In method org.apache.kafka.common.config.ConfigDef.headers@POLYN507155 the MagicNumber/String  'Importance' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00866"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#866"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00866] For method getConfigValue arguments ConfigKey  key|String  headerName"
}} 
,
{ "ligne" : {
   "c1" : "00866"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#866"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00866] The argument key is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00868"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#868"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00868] In method org.apache.kafka.common.config.ConfigDef.getConfigValue@POLYN507402 the MagicNumber/String  'Name' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00870"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#870"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00870] In method org.apache.kafka.common.config.ConfigDef.getConfigValue@POLYN507402 the MagicNumber/String  'Description' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00872"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#872"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00872] In method org.apache.kafka.common.config.ConfigDef.getConfigValue@POLYN507402 the MagicNumber/String  'Type' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00874"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#874"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00874] In method org.apache.kafka.common.config.ConfigDef.getConfigValue@POLYN507402 the MagicNumber/String  'Default' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00876"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#876"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00876] In method org.apache.kafka.common.config.ConfigDef.getConfigValue@POLYN507402 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00877"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#877"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00877] In method org.apache.kafka.common.config.ConfigDef.getConfigValue@POLYN507402 the MagicNumber/String  'null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00880"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#880"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00880] In method org.apache.kafka.common.config.ConfigDef.getConfigValue@POLYN507402 the MagicNumber/String  '\'\'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00882"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#882"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00882] In method org.apache.kafka.common.config.ConfigDef.getConfigValue@POLYN507402 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00883"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#883"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00883] In method org.apache.kafka.common.config.ConfigDef.getConfigValue@POLYN507402 the MagicNumber/String  '.bytes' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00885"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#885"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00885] In method org.apache.kafka.common.config.ConfigDef.getConfigValue@POLYN507402 the MagicNumber/String  '.ms' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00891"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#891"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00891] In method org.apache.kafka.common.config.ConfigDef.getConfigValue@POLYN507402 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00892"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#892"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00892] In method org.apache.kafka.common.config.ConfigDef.getConfigValue@POLYN507402 the MagicNumber/String  'Valid Values' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00893"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#893"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00893] In method org.apache.kafka.common.config.ConfigDef.getConfigValue@POLYN507402 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00893"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#893"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00893] In method org.apache.kafka.common.config.ConfigDef.getConfigValue@POLYN507402 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00894"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#894"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00894] In method org.apache.kafka.common.config.ConfigDef.getConfigValue@POLYN507402 the MagicNumber/String  'Importance' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00897"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#897"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00897] In method org.apache.kafka.common.config.ConfigDef.getConfigValue@POLYN507402 the MagicNumber/String  'Can't find value for header '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00897"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#897"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00897] In method org.apache.kafka.common.config.ConfigDef.getConfigValue@POLYN507402 the MagicNumber/String  '' in ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00901"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#901"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00901] For method niceMemoryUnits arguments long  bytes"
}} 
,
{ "ligne" : {
   "c1" : "00903"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#903"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00903] In method org.apache.kafka.common.config.ConfigDef.niceMemoryUnits@POLYN509469 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00904"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#904"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00904] In method org.apache.kafka.common.config.ConfigDef.niceMemoryUnits@POLYN509469 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00904"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#904"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00904] In method org.apache.kafka.common.config.ConfigDef.niceMemoryUnits@POLYN509469 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00905"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#905"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00905] In method org.apache.kafka.common.config.ConfigDef.niceMemoryUnits@POLYN509469 the MagicNumber/String  1024L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00905"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#905"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00905] In method org.apache.kafka.common.config.ConfigDef.niceMemoryUnits@POLYN509469 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00906"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#906"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00906] In method org.apache.kafka.common.config.ConfigDef.niceMemoryUnits@POLYN509469 the MagicNumber/String  1024L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00913"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#913"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00913] In method org.apache.kafka.common.config.ConfigDef.niceMemoryUnits@POLYN509469 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00914"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#914"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00914] In method org.apache.kafka.common.config.ConfigDef.niceMemoryUnits@POLYN509469 the MagicNumber/String  ' (' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00914"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#914"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00914] In method org.apache.kafka.common.config.ConfigDef.niceMemoryUnits@POLYN509469 the MagicNumber/String  ' kibibyte' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00914"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#914"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00914] In method org.apache.kafka.common.config.ConfigDef.niceMemoryUnits@POLYN509469 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00914"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#914"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00914] In method org.apache.kafka.common.config.ConfigDef.niceMemoryUnits@POLYN509469 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00914"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#914"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00914] In method org.apache.kafka.common.config.ConfigDef.niceMemoryUnits@POLYN509469 the MagicNumber/String  's)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00915"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#915"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00915] In method org.apache.kafka.common.config.ConfigDef.niceMemoryUnits@POLYN509469 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00916"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#916"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00916] In method org.apache.kafka.common.config.ConfigDef.niceMemoryUnits@POLYN509469 the MagicNumber/String  ' (' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00916"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#916"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00916] In method org.apache.kafka.common.config.ConfigDef.niceMemoryUnits@POLYN509469 the MagicNumber/String  ' mebibyte' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00916"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#916"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00916] In method org.apache.kafka.common.config.ConfigDef.niceMemoryUnits@POLYN509469 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00916"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#916"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00916] In method org.apache.kafka.common.config.ConfigDef.niceMemoryUnits@POLYN509469 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00916"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#916"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00916] In method org.apache.kafka.common.config.ConfigDef.niceMemoryUnits@POLYN509469 the MagicNumber/String  's)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00917"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#917"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00917] In method org.apache.kafka.common.config.ConfigDef.niceMemoryUnits@POLYN509469 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00918"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#918"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00918] In method org.apache.kafka.common.config.ConfigDef.niceMemoryUnits@POLYN509469 the MagicNumber/String  ' (' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00918"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#918"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00918] In method org.apache.kafka.common.config.ConfigDef.niceMemoryUnits@POLYN509469 the MagicNumber/String  ' gibibyte' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00918"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#918"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00918] In method org.apache.kafka.common.config.ConfigDef.niceMemoryUnits@POLYN509469 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00918"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#918"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00918] In method org.apache.kafka.common.config.ConfigDef.niceMemoryUnits@POLYN509469 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00918"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#918"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00918] In method org.apache.kafka.common.config.ConfigDef.niceMemoryUnits@POLYN509469 the MagicNumber/String  's)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00919"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#919"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00919] In method org.apache.kafka.common.config.ConfigDef.niceMemoryUnits@POLYN509469 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00920"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#920"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00920] In method org.apache.kafka.common.config.ConfigDef.niceMemoryUnits@POLYN509469 the MagicNumber/String  ' (' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00920"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#920"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00920] In method org.apache.kafka.common.config.ConfigDef.niceMemoryUnits@POLYN509469 the MagicNumber/String  ' tebibyte' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00920"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#920"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00920] In method org.apache.kafka.common.config.ConfigDef.niceMemoryUnits@POLYN509469 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00920"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#920"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00920] In method org.apache.kafka.common.config.ConfigDef.niceMemoryUnits@POLYN509469 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00920"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#920"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00920] In method org.apache.kafka.common.config.ConfigDef.niceMemoryUnits@POLYN509469 the MagicNumber/String  's)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00922"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#922"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00922] In method org.apache.kafka.common.config.ConfigDef.niceMemoryUnits@POLYN509469 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00926"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#926"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00926] For method niceTimeUnits arguments long  millis"
}} 
,
{ "ligne" : {
   "c1" : "00928"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#928"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00928] In method org.apache.kafka.common.config.ConfigDef.niceTimeUnits@POLYN511347 the MagicNumber/String  1000 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00928"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#928"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00928] In method org.apache.kafka.common.config.ConfigDef.niceTimeUnits@POLYN511347 the MagicNumber/String  60 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00928"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#928"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00928] In method org.apache.kafka.common.config.ConfigDef.niceTimeUnits@POLYN511347 the MagicNumber/String  60 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00928"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#928"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00928] In method org.apache.kafka.common.config.ConfigDef.niceTimeUnits@POLYN511347 the MagicNumber/String  24 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00929"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#929"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00929] In method org.apache.kafka.common.config.ConfigDef.niceTimeUnits@POLYN511347 the MagicNumber/String  'second' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00929"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#929"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00929] In method org.apache.kafka.common.config.ConfigDef.niceTimeUnits@POLYN511347 the MagicNumber/String  'minute' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00929"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#929"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00929] In method org.apache.kafka.common.config.ConfigDef.niceTimeUnits@POLYN511347 the MagicNumber/String  'hour' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00929"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#929"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00929] In method org.apache.kafka.common.config.ConfigDef.niceTimeUnits@POLYN511347 the MagicNumber/String  'day' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00930"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#930"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00930] In method org.apache.kafka.common.config.ConfigDef.niceTimeUnits@POLYN511347 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00931"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#931"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00931] In method org.apache.kafka.common.config.ConfigDef.niceTimeUnits@POLYN511347 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00931"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#931"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00931] In method org.apache.kafka.common.config.ConfigDef.niceTimeUnits@POLYN511347 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00932"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#932"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00932] In method org.apache.kafka.common.config.ConfigDef.niceTimeUnits@POLYN511347 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00939"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#939"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00939] In method org.apache.kafka.common.config.ConfigDef.niceTimeUnits@POLYN511347 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00940"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#940"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00940] In method org.apache.kafka.common.config.ConfigDef.niceTimeUnits@POLYN511347 the MagicNumber/String  ' (' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00940"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#940"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00940] In method org.apache.kafka.common.config.ConfigDef.niceTimeUnits@POLYN511347 the MagicNumber/String  ' ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00940"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#940"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00940] In method org.apache.kafka.common.config.ConfigDef.niceTimeUnits@POLYN511347 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00940"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#940"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00940] In method org.apache.kafka.common.config.ConfigDef.niceTimeUnits@POLYN511347 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00940"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#940"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00940] In method org.apache.kafka.common.config.ConfigDef.niceTimeUnits@POLYN511347 the MagicNumber/String  's)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00940"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#940"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00940] In method org.apache.kafka.common.config.ConfigDef.niceTimeUnits@POLYN511347 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00942"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#942"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00942] In method org.apache.kafka.common.config.ConfigDef.niceTimeUnits@POLYN511347 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00949"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#949"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00949] For method addHeader arguments StringBuilder  builder|String  headerName"
}} 
,
{ "ligne" : {
   "c1" : "00949"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#949"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00949] The argument builder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00950"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#950"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00950] In method org.apache.kafka.common.config.ConfigDef.addHeader@POLYN512881 the MagicNumber/String  '&amp;lt;th&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00952"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#952"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00952] In method org.apache.kafka.common.config.ConfigDef.addHeader@POLYN512881 the MagicNumber/String  '&amp;lt;/th&amp;gt;\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00955"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#955"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00955] For method addColumnValue arguments StringBuilder  builder|String  value"
}} 
,
{ "ligne" : {
   "c1" : "00955"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#955"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00955] The argument builder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00956"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#956"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00956] In method org.apache.kafka.common.config.ConfigDef.addColumnValue@POLYN513186 the MagicNumber/String  '&amp;lt;td&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00958"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#958"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00958] In method org.apache.kafka.common.config.ConfigDef.addColumnValue@POLYN513186 the MagicNumber/String  '&amp;lt;/td&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00962"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#962"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00962] For method toHtmlTable arguments Map&lt;String ,String &gt;  dynamicUpdateModes"
}} 
,
{ "ligne" : {
   "c1" : "00962"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#962"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00962] The argument dynamicUpdateModes is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00981"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#981"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00981] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00986"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#986"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00986] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00966"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#966"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00966] In method org.apache.kafka.common.config.ConfigDef.toHtmlTable@POLYN513741 the MagicNumber/String  '&amp;lt;table class=\'data-table\'&amp;gt;&amp;lt;tbody&amp;gt;\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00967"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#967"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00967] In method org.apache.kafka.common.config.ConfigDef.toHtmlTable@POLYN513741 the MagicNumber/String  '&amp;lt;tr&amp;gt;\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00973"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#973"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00973] In method org.apache.kafka.common.config.ConfigDef.toHtmlTable@POLYN513741 the MagicNumber/String  'Dynamic Update Mode' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00974"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#974"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00974] In method org.apache.kafka.common.config.ConfigDef.toHtmlTable@POLYN513741 the MagicNumber/String  '&amp;lt;/tr&amp;gt;\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00979"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#979"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00979] In method org.apache.kafka.common.config.ConfigDef.toHtmlTable@POLYN513741 the MagicNumber/String  '&amp;lt;tr&amp;gt;\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00983"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#983"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00983] In method org.apache.kafka.common.config.ConfigDef.toHtmlTable@POLYN513741 the MagicNumber/String  '&amp;lt;/td&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00987"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#987"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00987] In method org.apache.kafka.common.config.ConfigDef.toHtmlTable@POLYN513741 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00988"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#988"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00988] In method org.apache.kafka.common.config.ConfigDef.toHtmlTable@POLYN513741 the MagicNumber/String  'read-only' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00991"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#991"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00991] In method org.apache.kafka.common.config.ConfigDef.toHtmlTable@POLYN513741 the MagicNumber/String  '&amp;lt;/tr&amp;gt;\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00993"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#993"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00993] In method org.apache.kafka.common.config.ConfigDef.toHtmlTable@POLYN513741 the MagicNumber/String  '&amp;lt;/tbody&amp;gt;&amp;lt;/table&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01005"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1005"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01005] In method org.apache.kafka.common.config.ConfigDef.toRst@POLYN515757 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1035"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01035] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01014"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1014"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01014] In method org.apache.kafka.common.config.ConfigDef.toEnrichedRst@POLYN516350 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01019"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1019"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01019] In method org.apache.kafka.common.config.ConfigDef.toEnrichedRst@POLYN516350 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01021"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1021"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01021] In method org.apache.kafka.common.config.ConfigDef.toEnrichedRst@POLYN516350 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01024"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1024"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01024] In method org.apache.kafka.common.config.ConfigDef.toEnrichedRst@POLYN516350 the MagicNumber/String  '^' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01025"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1025"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01025] In method org.apache.kafka.common.config.ConfigDef.toEnrichedRst@POLYN516350 the MagicNumber/String  '\n\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01032"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1032"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01032] In method org.apache.kafka.common.config.ConfigDef.toEnrichedRst@POLYN516350 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01032"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1032"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01032] In method org.apache.kafka.common.config.ConfigDef.toEnrichedRst@POLYN516350 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1033"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01033] In method org.apache.kafka.common.config.ConfigDef.toEnrichedRst@POLYN516350 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01034"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1034"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01034] In method org.apache.kafka.common.config.ConfigDef.toEnrichedRst@POLYN516350 the MagicNumber/String  '  * Dependents: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1036"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01036] In method org.apache.kafka.common.config.ConfigDef.toEnrichedRst@POLYN516350 the MagicNumber/String  '``' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01039"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1039"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01039] In method org.apache.kafka.common.config.ConfigDef.toEnrichedRst@POLYN516350 the MagicNumber/String  '``' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1041"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01041] In method org.apache.kafka.common.config.ConfigDef.toEnrichedRst@POLYN516350 the MagicNumber/String  '``, ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1043"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01043] In method org.apache.kafka.common.config.ConfigDef.toEnrichedRst@POLYN516350 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01045"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1045"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01045] In method org.apache.kafka.common.config.ConfigDef.toEnrichedRst@POLYN516350 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1051"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01051] For method getConfigKeyRst arguments ConfigKey  key|StringBuilder  b"
}} 
,
{ "ligne" : {
   "c1" : "01051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1051"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01051] The argument key is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1052"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01052] In method org.apache.kafka.common.config.ConfigDef.getConfigKeyRst@POLYN518518 the MagicNumber/String  '``' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1052"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01052] In method org.apache.kafka.common.config.ConfigDef.getConfigKeyRst@POLYN518518 the MagicNumber/String  '``' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1052"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01052] In method org.apache.kafka.common.config.ConfigDef.getConfigKeyRst@POLYN518518 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1053"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01053] In method org.apache.kafka.common.config.ConfigDef.getConfigKeyRst@POLYN518518 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1054"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01054] In method org.apache.kafka.common.config.ConfigDef.getConfigKeyRst@POLYN518518 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1055"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01055] In method org.apache.kafka.common.config.ConfigDef.getConfigKeyRst@POLYN518518 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1058"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01058] In method org.apache.kafka.common.config.ConfigDef.getConfigKeyRst@POLYN518518 the MagicNumber/String  '  ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1058"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01058] In method org.apache.kafka.common.config.ConfigDef.getConfigKeyRst@POLYN518518 the MagicNumber/String  '\n\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1061"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01061] In method org.apache.kafka.common.config.ConfigDef.getConfigKeyRst@POLYN518518 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1063"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01063] In method org.apache.kafka.common.config.ConfigDef.getConfigKeyRst@POLYN518518 the MagicNumber/String  '  * Type: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1063"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01063] In method org.apache.kafka.common.config.ConfigDef.getConfigKeyRst@POLYN518518 the MagicNumber/String  'Type' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1063"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01063] In method org.apache.kafka.common.config.ConfigDef.getConfigKeyRst@POLYN518518 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1065"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01065] In method org.apache.kafka.common.config.ConfigDef.getConfigKeyRst@POLYN518518 the MagicNumber/String  '  * Default: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1065"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01065] In method org.apache.kafka.common.config.ConfigDef.getConfigKeyRst@POLYN518518 the MagicNumber/String  'Default' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1065"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01065] In method org.apache.kafka.common.config.ConfigDef.getConfigKeyRst@POLYN518518 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1067"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01067] In method org.apache.kafka.common.config.ConfigDef.getConfigKeyRst@POLYN518518 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1068"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01068] In method org.apache.kafka.common.config.ConfigDef.getConfigKeyRst@POLYN518518 the MagicNumber/String  '  * Valid Values: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1068"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01068] In method org.apache.kafka.common.config.ConfigDef.getConfigKeyRst@POLYN518518 the MagicNumber/String  'Valid Values' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1068"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01068] In method org.apache.kafka.common.config.ConfigDef.getConfigKeyRst@POLYN518518 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1070"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01070] In method org.apache.kafka.common.config.ConfigDef.getConfigKeyRst@POLYN518518 the MagicNumber/String  '  * Importance: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1070"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01070] In method org.apache.kafka.common.config.ConfigDef.getConfigKeyRst@POLYN518518 the MagicNumber/String  'Importance' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1070"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01070] In method org.apache.kafka.common.config.ConfigDef.getConfigKeyRst@POLYN518518 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1076"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01076] In method org.apache.kafka.common.config.ConfigDef.sortedConfigs@POLYN520548 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1086"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01086] For method compare arguments ConfigKey  k1|ConfigKey  k2|Map&lt;String ,Integer &gt;  groupOrd"
}} 
,
{ "ligne" : {
   "c1" : "01086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1086"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01086] The argument k1 is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1086"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01086] The argument k2 is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1086"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01086] The argument groupOrd is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1087"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01087] In method org.apache.kafka.common.config.ConfigDef.compare@POLYN521375 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1088"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01088] In method org.apache.kafka.common.config.ConfigDef.compare@POLYN521375 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1088"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01088] In method org.apache.kafka.common.config.ConfigDef.compare@POLYN521375 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1088"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01088] In method org.apache.kafka.common.config.ConfigDef.compare@POLYN521375 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1089"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01089] In method org.apache.kafka.common.config.ConfigDef.compare@POLYN521375 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1089"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01089] In method org.apache.kafka.common.config.ConfigDef.compare@POLYN521375 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1090"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01090] In method org.apache.kafka.common.config.ConfigDef.compare@POLYN521375 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01092"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1092"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01092] In method org.apache.kafka.common.config.ConfigDef.compare@POLYN521375 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1095"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01095] In method org.apache.kafka.common.config.ConfigDef.compare@POLYN521375 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1097"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01097] In method org.apache.kafka.common.config.ConfigDef.compare@POLYN521375 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01100] In method org.apache.kafka.common.config.ConfigDef.compare@POLYN521375 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1108"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01108] For method embed arguments String  keyPrefix|String  groupPrefix|int  startingOrd|ConfigDef  child"
}} 
,
{ "ligne" : {
   "c1" : "01108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1108"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01108] The argument child is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01118] In method org.apache.kafka.common.config.ConfigDef.embed@POLYN522944 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01118] In method org.apache.kafka.common.config.ConfigDef.embed@POLYN522944 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01118] In method org.apache.kafka.common.config.ConfigDef.embed@POLYN522944 the MagicNumber/String  ': ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1129"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01129] For method embeddedValidator arguments String  keyPrefix|Validator  base"
}} 
,
{ "ligne" : {
   "c1" : "01129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1129"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01129] The argument keyPrefix is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01130] In method org.apache.kafka.common.config.ConfigDef.embeddedValidator@POLYN524210 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01130] In method org.apache.kafka.common.config.ConfigDef.embeddedValidator@POLYN524210 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01144"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1144"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01144] For method embeddedDependents arguments String  keyPrefix|List&lt;String &gt;  dependents"
}} 
,
{ "ligne" : {
   "c1" : "01145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01145] In method org.apache.kafka.common.config.ConfigDef.embeddedDependents@POLYN524922 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01145] In method org.apache.kafka.common.config.ConfigDef.embeddedDependents@POLYN524922 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01154"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1154"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01154] For method embeddedRecommender arguments String  keyPrefix|Recommender  base"
}} 
,
{ "ligne" : {
   "c1" : "01154"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1154"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01154] The argument keyPrefix is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01155"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01155] In method org.apache.kafka.common.config.ConfigDef.embeddedRecommender@POLYN525579 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01155"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01155] In method org.apache.kafka.common.config.ConfigDef.embeddedRecommender@POLYN525579 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01188"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1188"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01188] For method toHtml arguments int  headerDepth|Function&lt;String ,String &gt;  idGenerator"
}} 
,
{ "ligne" : {
   "c1" : "01193"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1193"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01193] For method toHtml arguments Map&lt;String ,String &gt;  dynamicUpdateModes"
}} 
,
{ "ligne" : {
   "c1" : "01194"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01194] In method org.apache.kafka.common.config.ConfigDef.toHtml@POLYN528232 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01198"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1198"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01198] For method toHtml arguments int  headerDepth|Function&lt;String ,String &gt;  idGenerator|Map&lt;String ,String &gt;  dynamicUpdateModes"
}} 
,
{ "ligne" : {
   "c1" : "01198"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1198"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01198] The argument idGenerator is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01199"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1199"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01199] The argument dynamicUpdateModes is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01220"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1220"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01220] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01225"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1225"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01225] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01203"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01203] In method org.apache.kafka.common.config.ConfigDef.toHtml@POLYN528836 the MagicNumber/String  '&amp;lt;ul class=\'config-list\'&amp;gt;\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01208"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01208] In method org.apache.kafka.common.config.ConfigDef.toHtml@POLYN528836 the MagicNumber/String  '&amp;lt;li&amp;gt;\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01209"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1209"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01209] In method org.apache.kafka.common.config.ConfigDef.toHtml@POLYN528836 the MagicNumber/String  '&amp;lt;h%1$d&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01210"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01210] In method org.apache.kafka.common.config.ConfigDef.toHtml@POLYN528836 the MagicNumber/String  '&amp;lt;a id=\'%3$s\'&amp;gt;&amp;lt;/a&amp;gt;&amp;lt;a id=\'%2$s\' href=\'#%2$s\'&amp;gt;%3$s&amp;lt;/a&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01211"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01211] In method org.apache.kafka.common.config.ConfigDef.toHtml@POLYN528836 the MagicNumber/String  '&amp;lt;/h%1$d&amp;gt;%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01212"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01212] In method org.apache.kafka.common.config.ConfigDef.toHtml@POLYN528836 the MagicNumber/String  '&amp;lt;p&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01213"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1213"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01213] In method org.apache.kafka.common.config.ConfigDef.toHtml@POLYN528836 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01214"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01214] In method org.apache.kafka.common.config.ConfigDef.toHtml@POLYN528836 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01214"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01214] In method org.apache.kafka.common.config.ConfigDef.toHtml@POLYN528836 the MagicNumber/String  '&amp;lt;br&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01216"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01216] In method org.apache.kafka.common.config.ConfigDef.toHtml@POLYN528836 the MagicNumber/String  '&amp;lt;/p&amp;gt;\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01218"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01218] In method org.apache.kafka.common.config.ConfigDef.toHtml@POLYN528836 the MagicNumber/String  '&amp;lt;table&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01219"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01219] In method org.apache.kafka.common.config.ConfigDef.toHtml@POLYN528836 the MagicNumber/String  '&amp;lt;tbody&amp;gt;\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01221"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1221"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01221] In method org.apache.kafka.common.config.ConfigDef.toHtml@POLYN528836 the MagicNumber/String  'Name' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01221"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1221"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01221] In method org.apache.kafka.common.config.ConfigDef.toHtml@POLYN528836 the MagicNumber/String  'Description' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01226"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1226"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01226] In method org.apache.kafka.common.config.ConfigDef.toHtml@POLYN528836 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01227"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1227"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01227] In method org.apache.kafka.common.config.ConfigDef.toHtml@POLYN528836 the MagicNumber/String  'read-only' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01228"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1228"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01228] In method org.apache.kafka.common.config.ConfigDef.toHtml@POLYN528836 the MagicNumber/String  'Update Mode' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01230"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01230] In method org.apache.kafka.common.config.ConfigDef.toHtml@POLYN528836 the MagicNumber/String  '&amp;lt;/tbody&amp;gt;&amp;lt;/table&amp;gt;\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01231"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01231] In method org.apache.kafka.common.config.ConfigDef.toHtml@POLYN528836 the MagicNumber/String  '&amp;lt;/li&amp;gt;\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01233"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01233] In method org.apache.kafka.common.config.ConfigDef.toHtml@POLYN528836 the MagicNumber/String  '&amp;lt;/ul&amp;gt;\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01237"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1237"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01237] For method addConfigDetail arguments StringBuilder  builder|String  name|String  value"
}} 
,
{ "ligne" : {
   "c1" : "01237"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1237"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01237] The argument builder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01238"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01238] In method org.apache.kafka.common.config.ConfigDef.addConfigDetail@POLYN531377 the MagicNumber/String  '&amp;lt;tr&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01239"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1239"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01239] In method org.apache.kafka.common.config.ConfigDef.addConfigDetail@POLYN531377 the MagicNumber/String  '&amp;lt;th&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01239"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1239"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01239] In method org.apache.kafka.common.config.ConfigDef.addConfigDetail@POLYN531377 the MagicNumber/String  ':&amp;lt;/th&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01240"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1240"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01240] In method org.apache.kafka.common.config.ConfigDef.addConfigDetail@POLYN531377 the MagicNumber/String  '&amp;lt;td&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01240"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1240"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01240] In method org.apache.kafka.common.config.ConfigDef.addConfigDetail@POLYN531377 the MagicNumber/String  '&amp;lt;/td&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01241"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01241] In method org.apache.kafka.common.config.ConfigDef.addConfigDetail@POLYN531377 the MagicNumber/String  '&amp;lt;/tr&amp;gt;\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#76"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00076] Public method define is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#82"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00082] Public method define is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#88"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00088] Public method define is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#94"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00094] Public method define is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#100"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00100] Public method define is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#106"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00106] Public method define is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#112"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00112] Public method define is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#118"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00118] Public method define is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#124"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00124] Public method define is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#130"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00130] Public method define is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#136"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00136] Public method define is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#142"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00142] Public method define is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#148"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00148] Public method define is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#153"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00153] Public method define is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#158"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00158] Public method define is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#163"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00163] Public method defineInternal is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#168"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00168] Public method defineInternal is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#183"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00183] Public method withClientSslSupport is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#189"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00189] Public method withClientSaslSupport is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00227"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#227"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00227] Public method validate is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00360"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#360"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00360] Public method parseType is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00459"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#459"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00459] Public method convertToString is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00489"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#489"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00489] Public method convertToStringMapWithPasswordValues is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00945"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#945"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00945] Public method toHtmlTable is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00962"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#962"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00962] Public method toHtmlTable is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00998"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#998"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00998] Public method toRst is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "01011"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1011"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[01011] Public method toEnrichedRst is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "01183"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1183"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[01183] Public method toHtml is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "01188"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1188"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[01188] Public method toHtml is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "01193"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1193"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[01193] Public method toHtml is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "01198"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1198"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[01198] Public method toHtml is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "01108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/ConfigDef.java.html#1108"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[01108] Public method embed is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
